const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();
const mailgun = require('mailgun-js');
const DOMAIN = 'mg.mmportfolio.dev';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post('/api/sendMail', (req, res) => {

    const mg = mailgun({ apiKey: '3a3ed0b15f6b73c2eb5b88a0008ddd2b-4879ff27-29351e1d', domain: DOMAIN });

    const data = {
        to: 'mikal815@gmail.com', // Change to your recipient
        from: `${req.body.email}`, // Change to your verified sender
        subject: 'New message!/michaelmensinger.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    mg.messages().send(data, function (error, body) {
        console.log(body);
    });

});


//if (apps.env.NODE_ENV === "production") {

app.use(express.static('client/build'));

//  app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//});

//}


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})

