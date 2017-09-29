const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');




// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location

app.get('/email', (req, res) => {

    const nodemailer = require('nodemailer');
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
    
        // create reusable transporter object using the default SMTP transport
        var smtpTransport = nodemailer.createTransport("SMTP",{
          service: "Gmail",
          auth: {
              user: "lypandrew87@gmail.com",
              pass: "Hilltop87!"
          }
      });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
            to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };
    
        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
      
        });
    });
    
  

});
    
app.get('/api', (req, res) => {

    console.log("here"); 
    MongoClient.connect('mongodb://localhost:27017/mean', function (err, db) {
        if (err) throw err
      
        db.collection('users').find().toArray(function (err, result) {
          if (err) throw err
      
         
         res.send(result); 
        })
      })


});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));