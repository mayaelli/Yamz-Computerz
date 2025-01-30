# Landing-Yamz

In this version of the website, I added a feature that allows the users to send their inquiries through the website. The way it works is that they will input their email and their feedback/inquiries/messages. After clickig the "Submit" button, an email is automatically sent to the email indicated in the code ("contact.js"), containing the message they typed in the text box in the website as well as the subject "Shop Inquiry".

This is made possible through Node.js server and Nodemailer. In order to run this feature, follow the instructions below:

**contact.js**:
  > 1. Indicate the email service provider you are using for your email (E.g. gmail, yahoo, etc.)
  > 2. Under "auth:" write your email. This is the email where the inquiries from the website will be sent.
  > 3. Indicate your password. IF you are using GMAIL as your email service provider, follow these instructions: <br>
    > 3.1. Sign in your Google Account and go to App passwords <br>
    > 3.2. Verify your identity <br>
    > 3.3. In the "App name" section, enter any name. Preferrably, Nodemailer for an easier time recalling <br>
    > 3.4. Google will generate a 16-character password for you. Copy this and paste it in the 'pass' variable. <br>
    > 3.5. After updating the password, restart your Node.js server. <br>
  > 4. Within the "app.post" block, replace "mailOptions" details with the appropriate details.

**Before running the html file, set up your Node.js server first.** To do so, follow these instructions:
  > 1. Open the terminal and navigate to the folder where "contact.js" is in.
  > 2. Enter the following commands <br>
    2.1. npm init -y <br>
      > This creates a "package.json" file in your directory to manage dependencies. <br>
    2.2. npm install express cors <br>
      > This will install express and cors and add them to your package.json dependencies. <br>
    2.3. npm install nodemailer <br>
      > This will add nodemailer to your project and update your package.json with nodemailer as a dependency. <br>
    2.4. node contact.js <br>
      > This starts the server, allowing to connect the emails. <br>
