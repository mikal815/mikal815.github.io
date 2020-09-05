const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail", (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.PASSWORD
        }
    })

    console.log(req.body.name, req.body.email, req.body.message)

    // Specify what the email will look like
    const mailOpts = {
        from: `${req.body.email}`, // This is ignored by Gmail
        to: process.env.MYEMAIL,
        subject: 'New message!/michaelmensinger.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.send('contact-failure') // Show a page indicating failure
        }
        else {
            res.send('contact-success') // Show a page indicating success
        }
    })

    // console.log(req.body)

})

app.listen(5000, () => {
    console.log("Server running at port 5000");
})