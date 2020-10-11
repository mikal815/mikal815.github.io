const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require("nodemailer");
const sgTransport = require('nodemailer-sendgrid-transport');
const path = require('path');
require('dotenv').config();
const sgMail = require('@sendgrid/mail')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



app.post("/api/sendMail", (req, res) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: process.env.MYEMAIL, // Change to your recipient
        from: `${req.body.email}`, // Change to your verified sender
        subject: 'New message!/michaelmensinger.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })


})



if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });

}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})







/////////////////////////////

// Instantiate the SMTP server
// const smtpTrans = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.MYEMAIL,
//         pass: process.env.PASSWORD
//     }
// })

// console.log(req.body.name, req.body.email, req.body.message)

// Specify what the email will look like
// const mailOpts = {
//     from: `${req.body.email}`, // This is ignored by Gmail
//     to: process.env.MYEMAIL,
//     subject: 'New message!/michaelmensinger.com',
//     text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
// }

// Attempt to send the email
// smtpTrans.sendMail(mailOpts, (error, response) => {
//     if (error) {
//         res.send('contact-failure')
//         console.log(error);
//     }
//     else {
//         res.send('contact-success')
//     }
// })