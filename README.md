# `stripe-workers`

An unofficial stripe-sdk for [workers.dev](https://workers.dev) and environments that use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### BETA
This project is in beta, this SDK is built to follow the offical stripe-node package.

### Including the package in your workers.dev script
1: git clone `https://github.com/Enforged/stripe-workers.git`    
2: run `yarn build`  
3: Go to your workers.dev project  
4: run `yarn add <path>` where path is the path to where you saved the stripe-js project.  
5: add `import { Stripe } from 'stripe-workers'` to your code  
### 👩 💻 Developing

[`src/index.ts`](./src/index.ts) is the starting point.  
[`src/resources`](./src/resources) the resources directory contains all the code for the stripe API resources that this package support.  [`src/client.ts`](./src/client.ts) contains the fetch client.

### 🧪 Testing

This template comes with mocha tests which simply test that the request handler can handle each request method. `yarn test` will run your tests.

### ✏️ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `yarn format`.

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/Enforged/stripe-workers/issues).
