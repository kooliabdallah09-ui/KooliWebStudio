# Link the contact form to a Google Sheet

Follow these steps so form submissions (name, email, phone, message) are saved to a Google Sheet.

## 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet (or use an existing one).
2. In **row 1**, add these headers:
   - **A1:** `Name`
   - **B1:** `Email`
   - **C1:** `Phone`
   - **D1:** `Message`
   - **E1:** `Date`
3. Save the sheet (optional: name it e.g. "Contact form submissions").

## 2. Add the script

1. In the sheet menu, click **Extensions → Apps Script**.
2. Delete any sample code in the editor.
3. Open the file **`Code.gs`** in this folder (`google-sheet-form-setup/Code.gs`), copy all its contents, and paste them into the Apps Script editor.
4. (Optional) In `Code.gs`, change the line `var SITE_URL = '...'` to your real website URL so the “Back to website” link on the thank-you page works.
5. Click **Save** (disk icon) and give the project a name (e.g. “Contact form”).

## 3. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to “Select type” and choose **Web app**.
3. Set:
   - **Description:** e.g. `Contact form`
   - **Execute as:** **Me** (your Google account)
   - **Who has access:** **Anyone** (so visitors can submit the form)
4. Click **Deploy**.
5. If asked, **Authorize access** (choose your Google account and allow permissions).
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

## 4. Connect the website form

1. Open **`index.html`** in your Solo-Pro Website project.
2. Find the contact form: `<form class="contact-form" action="PASTE_YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE" ...`
3. Replace **`PASTE_YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE`** with the Web app URL you copied (keep the quotes).

Save and upload your site. When someone submits the form, their name, email, phone, message, and the date will appear as a new row in your Google Sheet, and they’ll see a thank-you page with a link back to your site.
