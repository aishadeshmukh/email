'use strict'

const config = require("../config/msg.json");
const {responseFunction} = require("../util/response")
const { sendEmail} = require("../factory/factory")
const util = require('util')

exports.sendEmail = {

    tags: ['api', 'Send email'],
    description: 'Send email to user',
    handler: async(request, h) => {

     //   let message = sendEmail(request);
     //   console.log(message)
      // console.log(util.inspect(sendEmail(request)))

        return responseFunction(config.email, config.status, await sendEmail(request))
    }

}