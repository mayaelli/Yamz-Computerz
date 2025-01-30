// index.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your email credentials
const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service. Since my email is gmail, 'gmail' is what I'll use
    auth: {
        user: 'cjbe509@gmail.com', // replace with your email
        pass: 'htcf gehu gnzv znek' // replace with your email password
            /** Note: If you are using gmail, follow these instructions to generate a password:
                    1. Sign in your Google Account and go to App passwords 
                    2. Verify your identity
                    3. In the "App name" section, enter any name. Preferrably, Nodemailer for an easier time recalling
                    4. Google will generate a 16-character password for you. Copy this and paste it in the 'pass' variable.
                    5. After updating the password, restart your Node.js server.
            */
    },
    logger: true,
    debug: true
});

app.post('/send-inquiry', (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'cjbe509@gmail.com', // Replace with your email
        subject: 'Shop Inquiry',
        text: message,
        replyTo: email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            console.error('Email sending error: ', error);
            res.status(500).json({ success: false, error: 'Failed to send email.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});