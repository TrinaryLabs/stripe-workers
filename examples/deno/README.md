# `stripe-workers example`

An example of stripe-workers with Deno deploy script

## start
```bash
deployctl run --watch ./main.ts
```

## info 
When I import 'https://cdn.skypack.dev/stripe-workers@0.9.0-beta?dts' Deno does not like my export soo the import and setup must be like this: 

## setup
```js
import Stripe from 'https://cdn.skypack.dev/stripe-workers@0.9.0-beta?dts';

const stripe = new Stripe.Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc')
```