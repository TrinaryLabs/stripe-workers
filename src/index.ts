import { checkout } from './resources/checkout/sessions'
import { paymentIntents } from './resources/paymentIntents'
import { billingPortal } from './resources/billing/billingPortal'
import { accounts } from './resources/connect/accounts'

import { HTTPClient } from './client'

export class Stripe {
    checkout: typeof checkout
    paymentIntents: typeof paymentIntents
    billingPortal: typeof billingPortal
    accounts: typeof accounts

    constructor(stripe_secret: string, fetch?: Function) {
        let client = new HTTPClient(stripe_secret, fetch)

        this.checkout = checkout
        this.paymentIntents = paymentIntents
        this.billingPortal = billingPortal
        this.accounts = accounts

        this.checkout.sessions.client = client.request
        this.billingPortal.sessions.client = client.request
        this.accounts.client = client.request
    }
}
