import { checkout } from './resources/checkout/sessions'
import { paymentIntents } from './resources/paymentIntents'
import { billingPortal } from './resources/billing/billingPortal'
import { customers } from './resources/customers'
import { accounts } from './resources/connect/accounts'
import { accountLinks } from './resources/connect/accountLinks'
import { applicationFees } from './resources/connect/applicationFees'
import { countrySpecs } from './resources/connect/countrySpecs'
import { topups } from './resources/connect/topups'
import { transfers } from './resources/connect/transfers'
import { webhookEndpoints } from './resources/webhooks/webhookEndpoints'
import { sigma } from './resources/sigma/scheduledQueryRuns'
import { reporting } from './resources/reporting/report'
import { orders } from './resources/orders/orders'
import { orderReturns } from './resources/orders/orderReturns'
import { skus } from "./resources/orders/skus";

import { HTTPClient } from './client'
export class Stripe {
    checkout: typeof checkout
    paymentIntents: typeof paymentIntents
    billingPortal: typeof billingPortal
    accounts: typeof accounts
    customers: typeof customers
    accountLinks: typeof accountLinks
    applicationFees: typeof applicationFees
    countrySpecs: typeof countrySpecs
    topups: typeof topups
    transfers: typeof transfers
    webhookEndpoints: typeof webhookEndpoints
    sigma: typeof sigma
    reporting: typeof reporting
    orders: typeof orders
    orderReturns: typeof orderReturns
    skus: typeof skus

    constructor(
        stripe_secret: string,
        params: {
            apiVersion?: string
            fetch?: Function
            userAgent?: string
        },
    ) {
        let client = new HTTPClient(
            stripe_secret,
            params.apiVersion,
            params.userAgent,
            params.fetch,
        )

        this.checkout = checkout
        this.paymentIntents = paymentIntents
        this.billingPortal = billingPortal
        this.accounts = accounts
        this.customers = customers
        this.accountLinks = accountLinks
        this.applicationFees = applicationFees
        this.countrySpecs = countrySpecs
        this.topups = topups
        this.transfers = transfers
        this.webhookEndpoints = webhookEndpoints
        this.sigma = sigma
        this.reporting = reporting
        this.orders = orders
        this.orderReturns = orderReturns
        this.skus = skus

        this.checkout.sessions.client = client.request
        this.billingPortal.sessions.client = client.request
        this.accounts.client = client.request
        this.customers.client = client.request
        this.accountLinks.client = client.request
        this.applicationFees.client = client.request
        this.countrySpecs.client = client.request
        this.topups.client = client.request
        this.transfers.client = client.request
        this.webhookEndpoints.client = client.request
        this.sigma.scheduledQueryRuns.client = client.request
        this.reporting.reportRuns.client = client.request
        this.reporting.reportTypes.client = client.request
        this.orders.client = client.request
        this.orderReturns.client = client.request
        this.skus.client = client.request
    }
}
