import * as checkout from './resources/checkout/checkout';
import { HttpClient } from './HTTPclient';
import fetch from 'node-fetch';
import { toFormUrlEncoded } from './helpers'

export class Stripe {
  checkout: checkout.checkout
  constructor(authHeader: string) {
    let client = new HttpClient(authHeader, fetch.bind(globalThis))
    this.checkout = new checkout.checkout()

    this.checkout.sessions.client = client
    
  }

  async test() {
    try {
      var test = {
        success_url: 'https://test.com',
        cancel_url: 'https://test.com',
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {price: 'price_1HUX2SAQ5SYPvLIK79TL0i0S', quantity: 2}
        ],
      }

      var data = await this.checkout.sessions.create(test)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

}

let a = new Stripe('sk_test_51HSqaTAQ5SYPvLIK6DMqLpjznhEdyCF3xqffKcdaY6aRgbWrCgWoTEQRvVwspQFZfLBFgoqSsrYFOb4528oaHV4m00FeMRgAXU')

a.test()