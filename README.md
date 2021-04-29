# `stripe-workers`

An unofficial stripe-sdk for [workers.dev](https://workers.dev) and environments that use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## BETA

This project is in beta, this SDK is built to follow the offical stripe-api & follow the namespace structure of stripe-node . If you find any errors please file an issue

## Setup

### Add to project
```bash
yarn add stripe-workers
```

### Add to code
```js
import { Stripe } from 'stripe-workers'

const stripe = new Stripe('Stripe-Secret-Key', {
    apiVersion: '2020-08-27', //(optional: string)
    fetch: CustomFetch, //(optional: Function) window.fetch will be used
    userAgent: 'stripe-workers/version', //(optional: string)
})
```
## 👩 💻 Developing

[`src/index.ts`](./src/index.ts) is the starting point.  
[`src/resources/`](./src/resources/) the resources directory contains all the code for the stripe API resources that this package support.  
[`src/client.ts`](./src/client.ts) contains the fetch client.

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/TrinaryLabs/stripe-workers/issues).
