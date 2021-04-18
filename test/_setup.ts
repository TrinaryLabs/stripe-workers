import { Stripe } from '../src/index'
import fetch from 'node-fetch'; 

export const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {
    fetch: fetch
})