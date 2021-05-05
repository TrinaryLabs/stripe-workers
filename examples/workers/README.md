# `stripe-workers example`

An example of stripe-workers with cloudflare workers script

## start

```bash
wrangler dev
```

## info

This package needs the new way of publishing and developing with wrangler 1.16.

```bash
name = "workers"
type = "javascript"
account_id = ""
workers_dev = true
route = ""
zone_id = ""

[build]
command = "npm install && npm run build"
[build.upload]
format = "service-worker"
```

## setup

```js
import { Stripe } from 'stripe-workers'

const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc')
```
