import { checkout } from './resources/checkout/sessions'
import { paymentIntents } from './resources/paymentIntents'
import { billingPortal } from './resources/billing/billingPortal'
import { accounts } from './resources/connect/accounts'
import { customers } from './resources/customers'

import { HTTPClient } from './client'
export class Stripe {
    checkout: typeof checkout
    paymentIntents: typeof paymentIntents
    billingPortal: typeof billingPortal
    accounts: typeof accounts
    customers: typeof customers

    constructor(stripe_secret: string, 
        params: {
            apiVersion?: string,
            fetch?: Function,
            userAgent?: string
        }
    ) {
        let client = new HTTPClient(stripe_secret,
            params.apiVersion,
            params.userAgent,
            params.fetch
        )

        this.checkout = checkout
        this.paymentIntents = paymentIntents
        this.billingPortal = billingPortal
        this.accounts = accounts
        this.customers = customers

        this.checkout.sessions.client = client.request
        this.billingPortal.sessions.client = client.request
        this.accounts.client = client.request
        this.customers.client = client.request
    }
}
