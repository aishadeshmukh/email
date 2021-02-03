'use strict'

require("../util/emailer")
const db = require("../models/index")
const Product = db.Product;
const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "aishadeshmukh2021@gmail.com",
      pass: "aisha2021"
    }
    //port: 2525,
    
});

let productDetails = ''

exports.sendEmail = (request, h) => {

    productDetails = Product.findOne({
      attributes: ['name', 'descripion'] , 
      where: { id: request.payload.id }
     });

    //console.log("Product" ,productDetails)


   var p = new Promise(function (resolve) {
      setTimeout(function () {
      resolve(productDetails);
    }, 3000);
    });

    p.then(function (v) {
    //console.log('V ' , v.name);

   let message = {
    from: 'fb1bbc7206-9c5c51@inbox.mailtrap.io', // Sender address
    to: request.payload.email,
    subject: 'Product details',
    html: 
    ` 
    <h3> Here are the Product details !!</h3>
    
    <table style="width:50%;
    font-family: Georgia, Gorand, Serif;"
    border = "1px solid black"
    >
    <tr style= "color: blue" > 
    <th> Product id </th>
    <th> Product name </th>
    <th> Product description </th>
    </tr>
    <tr>
    <td> ${request.payload.id} </td>
    <td> ${v.name} </td>
    <td> ${v.descripion}  </td>
    </tr>
    </table>
    `
  }
//console.log(message)

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
      return 'Could not send email!'
    } else {
    //  console.log(info);
      return 'Email sent successfully !!!'
      }
    });

  });
    return productDetails;
    
}


