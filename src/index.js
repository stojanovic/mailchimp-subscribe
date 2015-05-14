'use strict'

const request      = require('request')

// Using a generator function to loop through object
const entries = function* (obj) {
   for (let key of Object.keys(obj)) {
     yield [key, obj[key]]
   }
}

class MailChimpSubscribe {

  constructor(options) {

    if (!options.dc)
      throw new Error('Datacenter (dc) option is required')

    if (!options.ApiKey)
      throw new Error('API Key is required')

    if (!options.listId)
      throw new Error('List ID is required')

    this.dc     = options.dc
    this.ApiKey = options.ApiKey
    this.listId = options.listId

    this.url    = `https://${this.dc}.api.mailchimp.com/2.0/lists/subscribe.json` +
                  `?apikey=${this.ApiKey}&id=${this.listId}` +
                  `&double_optin=false&send_welcome=false`

  }

  subscribe(options, callback) {

    if (!options.email)
      throw new Error('Email address is required')

    for (let [key, value] of entries(options)) {
      if (key === 'email') {
        this.url += '&email=' + encodeURIComponent(value)
      } else {
        this.url += `&merge_vars[${key}]=${encodeURIComponent(value)}`
      }
    }

    request(this.url, callback)

  }

}

export default MailChimpSubscribe
