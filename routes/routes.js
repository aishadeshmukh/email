'use strict'
const email = require("../controller/controller")

module.exports = [
    {method: 'POST', path: '/send/email', config: email.sendEmail}
]