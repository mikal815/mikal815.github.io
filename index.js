const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const API_KEY = 'MAILGUN_API_KEY';
const DOMAIN = 'MAILGUN_DOMAIN';
const mailgun = require('mailgun-js')
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
// const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post("/api/sendMail", (req, res) => {

    const data = {
        from: `${req.body.email}`,
        to: 'mikal815@gmail.com',
        subject: 'New message!/michaelmensinger.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    mg.messages().send(data, (error, body) => {
        console.log(body);

        if (error) {
            res.status(status).send(body)
        }
        else {
            res.send('contact-success')
        }
    });


    // const smtpTrans = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: process.env.MYEMAIL,
    //         pass: process.env.PASSWORD
    //     }
    // })

    console.log(req.body.name, req.body.email, req.body.message)

    // const mailOpts = {
    //     from: `${req.body.email}`,
    //     to: process.env.MYEMAIL,
    //     subject: 'New message!/michaelmensinger.com',
    //     text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    // }

    // smtpTrans.sendMail(mailOpts, (error, response) => {
    //     if (error) {
    //         res.send('contact-failure')
    //     }
    //     else {
    //         res.send('contact-success')
    //     }
    // })

    // console.log(req.body)

})



//if (apps.env.NODE_ENV === "production") {

app.use(express.static('client/build'));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// });

//}


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})

