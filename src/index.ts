import { checkout } from './resources/checkout/sessions'
import { paymentIntents } from './resources/core/paymentIntents'
import { billingPortal } from './resources/billing/billingPortal'
import { customers } from './resources/core/customers'
import { accounts } from './resources/connect/accounts'
import { accountLinks } from './resources/connect/accountLinks'
import { applicationFees } from './resources/connect/applicationFees'
import { countrySpecs } from './resources/connect/countrySpecs'
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
import { balance } from './resources/core/balance'
import { topups } from './resources/connect/topups'
import { disputes } from './resources/core/disputes'
import { events } from './resources/core/events'
import { mandates } from './resources/core/mandates'
import { fileLinks } from './resources/core/fileLinks'
import { balanceTransactions } from './resources/core/balanceTransactions'
import { charges } from './resources/core/charges'
import { plans } from './resources/billing/plans'
import { payouts } from './resources/core/payouts'
import { prices } from './resources/core/prices'
import { products } from './resources/core/products'
import { refunds } from './resources/core/refunds'
import { setupAttempts } from './resources/core/setupAttempts'
import { setupIntents } from './resources/core/setupIntents'
import { tokens } from './resources/core/tokens'
import { files } from './resources/core/files'
import { subscriptionItems } from './resources/billing/subscriptionItems'
import { paymentMethods } from './resources/paymentMethods/paymentMethods'
import { sources } from './resources/paymentMethods/sources'
import { identity } from './resources/identity/identity'

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
    balance: typeof balance
    disputes: typeof disputes
    events: typeof events
    mandates: typeof mandates
    fileLinks: typeof fileLinks
    balanceTransactions: typeof balanceTransactions
    charges: typeof charges
    plans: typeof plans
    payouts: typeof payouts
    prices: typeof prices
    products: typeof products
    refunds: typeof refunds
    setupAttempts: typeof setupAttempts
    setupIntents: typeof setupIntents
    tokens: typeof tokens
    files: typeof files
    subscriptionItems: typeof subscriptionItems
    paymentMethods: typeof paymentMethods
    sources: typeof sources
    identity: typeof identity

    constructor(
        stripe_secret: string,
        params?: {
            apiVersion?: string
            fetch?: Function
            userAgent?: string
        },
    ) {
        let client = new HTTPClient(
            stripe_secret,
            params?.apiVersion,
            params?.userAgent,
            params?.fetch,
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
        this.balance = balance
        this.disputes = disputes
        this.events = events
        this.mandates = mandates
        this.fileLinks = fileLinks
        this.balanceTransactions = balanceTransactions
        this.charges = charges
        this.plans = plans
        this.payouts = payouts
        this.prices = prices
        this.products = products
        this.refunds = refunds
        this.setupAttempts = setupAttempts
        this.setupIntents = setupIntents
        this.tokens = tokens
        this.files = files
        this.subscriptionItems = subscriptionItems
        this.paymentMethods = paymentMethods
        this.sources = sources
        this.identity = identity

        this.checkout.client = client.request
        this.billingPortal.client = client.request
        this.accounts.client = client.request
        this.customers.client = client.request
        this.accountLinks.client = client.request
        this.applicationFees.client = client.request
        this.countrySpecs.client = client.request
        this.topups.client = client.request
        this.transfers.client = client.request
        this.webhookEndpoints.client = client.request
        this.sigma.client = client.request
        this.reporting.client = client.request
        this.orders.client = client.request
        this.orderReturns.client = client.request
        this.skus.client = client.request
        this.issuing.client = client.request
        this.terminal.client = client.request
        this.radar.client = client.request
        this.reviews.client = client.request
        this.balance.client = client.request
        this.topups.client = client.request
        this.disputes.client = client.request
        this.events.client = client.request
        this.mandates.client = client.request
        this.fileLinks.client = client.request
        this.balanceTransactions.client = client.request
        this.charges.client = client.request
        this.plans.client = client.request
        this.payouts.client = client.request
        this.prices.client = client.request
        this.products.client = client.request
        this.refunds.client = client.request
        this.setupAttempts.client = client.request
        this.setupIntents.client = client.request
        this.tokens.client = client.request
        this.files.client = client.request
        this.subscriptionItems.client = client.request
        this.paymentMethods.client = client.request
        this.sources.client = client.request
        this.paymentIntents.client = client.request
        this.identity.client = client.request
    }
}
