# Attendance-EmailAutomation
<br>
Attendance Email Notification Script
<br>
Overview
<br>
This Google Apps Script automates the process of sending attendance updates to students via email. It retrieves student names, attendance percentages, and email addresses from a Google Sheet and sends personalized emails containing their attendance details in a neatly formatted table.
<br>
Features
<br>
Retrieves student data from a specified Google Sheet.
Sends personalized email notifications to each student.
Displays attendance information in an HTML table format for better readability.
Logs email sending status for easy debugging.
Requirements
A Google account with access to Google Sheets and Gmail.
A Google Sheet containing student names, attendance percentages, and email addresses.
Setup Instructions
<br>
Create the Google Sheet:
<br>
Open Google Sheets and create a new sheet.
Name the sheet "Sheet1".
In Column B (starting from B2), enter the student names.
In Column C (starting from C2), enter the corresponding attendance percentages.
In Column D (starting from D2), enter the student email addresses.
<br>
Open Google Apps Script:
<br>
In your Google Sheet, click on Extensions > Apps Script.
<br>
Add the Script:

Replace any code in the script editor with the provided script code.
<br>
Code.gs
<br>
Save and Authorize:

Save your script and authorize it to access your Google Sheets and Gmail account when prompted.
Run the Script:

Click on the run button in the Apps Script editor to execute the sendAttendanceEmails function.
Logging
The script logs the details of each email sent and any issues encountered (e.g., missing email addresses or attendance data). You can view these logs in the Google Apps Script editor by clicking on View > Logs.
Troubleshooting
Ensure that the email addresses in Column D are valid and correctly formatted.
Check that the script has the necessary permissions to send emails.
