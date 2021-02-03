const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "30348cdb159108",
      pass: "0c71654c600b1c"
    }
  });

/*
const message = {
    from: 'fb1bbc7206-9c5c51@inbox.mailtrap.io', // Sender address
    to: 'aisha.deshmukh@iauro.com',         // List of recipients
    subject: 'Test Email', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
*/

/*
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
*/