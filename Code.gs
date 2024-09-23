function sendAttendanceEmails() {
  var wb = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = wb.getSheetByName('Sheet1');
  
  // Get all data at once (columns B, C, D)
  var data = sheet.getRange(2, 2, sheet.getLastRow() - 1, 3).getValues(); // Names in B, Attendance in C, Emails in D
  
  // Loop through each student
  for (var i = 0; i < data.length; i++) {
    var name = data[i][0];                    // Name in Column B
    var attendance = data[i][1];              // Attendance in Column C
    var email = data[i][2];                   // Email in Column D
    
    // Log the details
    Logger.log('Name: ' + name + ', Email: ' + email + ', Attendance: ' + attendance);
    
    // Send email (if email exists)
    if (email && attendance !== '') {
      var subject = 'Attendance Update for ' + name;

      // Create the HTML table
      var htmlMessage = `
        <p>Dear ${name},</p>
        <p>Your attendance details are as follows:</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Detail</th>
            <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Value</th>
          </tr>
          <tr>
            <td style="border: 1px solid #dddddd; padding: 8px;">Name</td>
            <td style="border: 1px solid #dddddd; padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #dddddd; padding: 8px;">Attendance</td>
            <td style="border: 1px solid #dddddd; padding: 8px;">${attendance}%</td>
          </tr>
        </table>
        <p>Best regards,<br>Your School</p>
      `;
      
      GmailApp.sendEmail(email, subject, '', {
        htmlBody: htmlMessage
      });
      Logger.log('Email sent to: ' + email);
    } else {
      Logger.log('No email address or attendance data found for ' + name);
    }
  }
}
