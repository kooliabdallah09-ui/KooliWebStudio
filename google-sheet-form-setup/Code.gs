/**
 * Google Apps Script: save contact form submissions to this spreadsheet, with spam protection.
 *
 * Main sheet columns: Name | Email | Phone | Message | Date
 * Blocked submissions go to a sheet called "Spam" (created automatically) with the reason,
 * so a real person caught by mistake can be recovered.
 *
 * After pasting this file: Deploy -> Manage deployments -> pencil icon -> Version: New version -> Deploy.
 * (The web app URL stays the same.)
 */

// Must match the hidden field named "k" in the website form (index.html).
var SECRET = 'kws-2026-contact';
var MIN_SECONDS_ON_PAGE = 3;      // humans take longer than this to fill the form
var MAX_PER_EMAIL_PER_6H = 3;     // limit repeats from the same email
var TEMP_EMAIL = /@([a-z0-9-]+\.)*(fextemp|merepost|mailinator|guerrillamail|tempmail|temp-mail|yopmail|10minutemail|sharklasers|trashmail|getnada|dispostable|maildrop)\./i;

function doGet() {
  return replyWithHtml('Contact form',
    '<p>This page is for form submissions from the website. Use the contact form on the site to send a message.</p>');
}

function doPost(e) {
  var p = e && e.parameter ? e.parameter : {};
  var row = [p.name || '', p.email || '', p.phone || '', p.message || '', new Date()];

  var reason = spamReason(p);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (reason) {
      getSpamSheet(ss).appendRow(row.concat([reason]));
    } else {
      ss.getSheets()[0].appendRow(row);
    }
  } catch (err) {
    return replyWithHtml('Something went wrong', '<p>Please try again later or email me directly.</p>');
  }
  // Same thank-you page either way, so bots learn nothing about what was blocked.
  return replyWithHtml('Thank you', '<p>Your message has been sent. I will get back to you soon.</p>');
}

function spamReason(p) {
  var name = String(p.name || ''), email = String(p.email || '').toLowerCase(), msg = String(p.message || '');

  if (p.company_url) return 'honeypot filled';                      // hidden field only bots fill
  if (p.k !== SECRET) return 'missing token (posted directly)';     // bots that skip the website form
  var secs = (parseInt(p.e, 10) || 0) / 1000;
  if (secs < MIN_SECONDS_ON_PAGE) return 'sent too fast';
  if (/<[a-z\/!][^>]*>/i.test(name + msg)) return 'html in text';
  if (/https?:\/\/|www\./i.test(name + ' ' + msg)) return 'link in text';
  if (TEMP_EMAIL.test(email)) return 'disposable email';
  if (msg.replace(/\s/g, '').length < 5 || msg.length > 3000) return 'bad message length';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'invalid email';

  var cache = CacheService.getScriptCache(), key = 'rl_' + email;
  var n = parseInt(cache.get(key) || '0', 10);
  if (n >= MAX_PER_EMAIL_PER_6H) return 'too many from same email';
  cache.put(key, String(n + 1), 21600);
  return '';
}

function getSpamSheet(ss) {
  var sh = ss.getSheetByName('Spam');
  if (!sh) {
    sh = ss.insertSheet('Spam');
    sh.appendRow(['Name', 'Email', 'Phone', 'Message', 'Date', 'Reason']);
  }
  return sh;
}

/**
 * Run this ONCE by hand (select cleanExistingSpam above, click Run) to move spam already in
 * the main sheet into the "Spam" sheet. It moves rows, it does not delete them permanently.
 */
function cleanExistingSpam() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), main = ss.getSheets()[0], spam = getSpamSheet(ss);
  var data = main.getDataRange().getValues(), moved = 0;
  for (var i = data.length - 1; i >= 1; i--) {            // bottom-up so row numbers stay valid
    var r = data[i], text = String(r[0]) + ' ' + String(r[3]), email = String(r[1]);
    var why = '';
    if (TEMP_EMAIL.test(email)) why = 'disposable email';
    else if (/<[a-z\/!][^>]*>/i.test(text) || /https?:\/\/|www\./i.test(text)) why = 'html or link in text';
    else if (/^RobertVance$/i.test(String(r[0]).replace(/\s/g, ''))) why = 'known spam sender';
    if (why) {
      spam.appendRow([r[0], r[1], r[2], r[3], r[4], why]);
      main.deleteRow(i + 1);
      moved++;
    }
  }
  SpreadsheetApp.getUi().alert('Moved ' + moved + ' spam row(s) to the "Spam" sheet.');
}
