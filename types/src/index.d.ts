import { checkout } from './resources/checkout/sessions'
import { paymentIntents } from './resources/paymentIntents'
import { billingPortal } from './resources/billing/billingPortal'
import { customers } from './resources/customers'
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
import { balance } from './resources/balance'
import { topups } from './resources/topups'
import { disputes } from './resources/disputes'
import { events } from './resources/events'
import { mandates } from './resources/mandates'
import { fileLinks } from './resources/fileLinks'
import { balanceTransactions } from './resources/balanceTransactions'
import { charges } from './resources/charges'
import { plans } from './resources/billing/plans'
import { payouts } from './resources/payouts'
import { prices } from './resources/prices'
import { products } from './resources/products'
import { refunds } from './resources/refunds'
import { setupAttempts } from './resources/setupAttempts'
import { setupIntents } from './resources/setupIntents'
import { tokens } from './resources/tokens'
import { files } from './resources/files'
export declare class Stripe {
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
    constructor(
        stripe_secret: string,
        params: {
            apiVersion?: string
            fetch?: Function
            userAgent?: string
        },
    )
}
//# sourceMappingURL=index.d.ts.map
