import * as checkout from './resources/checkout/checkout';
import { HttpClient } from './HTTPclient';
import fetch from 'node-fetch';

export class Stripe {
  checkout: checkout.checkout
  constructor(authHeader: string) {
    let client = new HttpClient(authHeader, fetch.bind(globalThis))
    this.checkout = new checkout.checkout()

    this.checkout.sessions.client = client
    
  }

  async test() {
    try {
      var data = await this.checkout.sessions.list()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

}

let a = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

a.test()