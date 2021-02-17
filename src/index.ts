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
import { skus } from './resources/orders/skus'
import { issuing } from './resources/issuing/issuing'
import { terminal } from './resources/terminal/terminal'
import { radar } from './resources/fraud/radar' 
import { reviews } from './resources/fraud/reviews' 

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
    issuing: typeof issuing
    terminal: typeof terminal
    radar: typeof radar
    reviews: typeof reviews

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
        this.issuing = issuing
        this.terminal = terminal
        this.radar = radar
        this.reviews = reviews

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
        this.issuing.authorizations.client = client.request
        this.issuing.cardholders.client = client.request
        this.issuing.cards.client = client.request
        this.issuing.disputes.client = client.request
        this.issuing.transactions.client = client.request
        this.terminal.connectionTokens.client = client.request
        this.terminal.locations.client = client.request
        this.terminal.readers.client = client.request
        this.radar.earlyFraudWarnings.client = client.request
        this.radar.valueList.client = client.request
        this.radar.valueListItems.client = client.request
        this.reviews.client = client.request
    }
}
