//require('dotenv').config();
//const env = require('dotenv').config({ path: './.config/.env' });

require('dotenv').config({ path: './.env' });
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: '',
  subject: 'Sending Email using Node.js',
  text: ' ff cs @ 11:50 '
};

//transporter.sendMail(mailOptions);


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});