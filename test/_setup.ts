import { Stripe } from '../src/index'
import fetch from 'node-fetch'; 

export const stripe = new Stripe('tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I', {
    fetch: fetch
})