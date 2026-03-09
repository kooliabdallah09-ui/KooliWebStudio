/**
 * Google Apps Script: Save contact form submissions to this spreadsheet
 *
 * SETUP:
 * 1. Create a new Google Sheet (or use an existing one).
 * 2. In the first row, add headers: Name | Email | Phone | Message | Date
 * 3. In the sheet menu: Extensions → Apps Script. Delete any sample code.
 * 4. Paste this entire file into the editor and save.
 * 5. Deploy: Deploy → New deployment → Type: Web app
 *    - Description: Contact form
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy, authorize if asked, then copy the "Web app URL".
 * 7. In your website's index.html, set the form action to that URL (replace YOUR_SCRIPT_URL).
 */

// When someone opens the script URL in a browser (GET), show a short message instead of an error
function doGet() {
  return replyWithHtml(
    'Contact form',
    '<p>This page is for form submissions from the website. Use the contact form on the site to send a message.</p>' +
    '<p><a href="javascript:history.back()">Go back</a></p>'
  );
}

function doPost(e) {
  var params = e && e.parameter ? e.parameter : {};
  var name = params.name || '';
  var email = params.email || '';
  var phone = params.phone || '';
  var message = params.message || '';

  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
    sheet.appendRow([name, email, phone, message, new Date()]);
  } catch (sheetErr) {
    return replyWithHtml(
      'Something went wrong',
      '<p>Please try again later or email me directly.</p>'
    );
  }

  // Success: thank-you page with explicit light background so it never shows as black
  var pageStyle = 'body{font-family:sans-serif;max-width:500px;margin:3rem auto;padding:1rem;line-height:1.6;background:#fff;color:#1a1a1a;} a{color:#2563eb;}';
  var successHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Thank you</title>' +
    '<style>' + pageStyle + '</style></head>' +
    '<body><h1>Thank you</h1><p>Your message has been sent. I will get back to you soon.</p>' +
    '<p><a href="javascript:history.back()">Back to website</a></p></body></html>';
  return ContentService.createTextOutput(successHtml).setMimeType(ContentService.MimeType.HTML);
}

function replyWithHtml(title, body) {
  var pageStyle = 'body{font-family:sans-serif;max-width:500px;margin:3rem auto;padding:1rem;line-height:1.6;background:#fff;color:#1a1a1a;} a{color:#2563eb;}';
  var safeTitle = (title && typeof title === 'string') ? title : 'Message';
  var safeBody = (body && typeof body === 'string') ? body : '<p>Done.</p>';
  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>' + safeTitle + '</title>' +
    '<style>' + pageStyle + '</style></head>' +
    '<body><h1>' + safeTitle + '</h1>' + safeBody + '</body></html>';
  return ContentService.createTextOutput(html).setMimeType(ContentService.MimeType.HTML);
}
