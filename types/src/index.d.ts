import { checkout } from './resources/checkout/sessions';
import { paymentIntents } from './resources/paymentIntents';
import { billingPortal } from './resources/billing/billingPortal';
import { accounts } from './resources/connect/accounts';
import { customers } from './resources/customers';
export declare class Stripe {
    checkout: typeof checkout;
    paymentIntents: typeof paymentIntents;
    billingPortal: typeof billingPortal;
    accounts: typeof accounts;
    customers: typeof customers;
    constructor(stripe_secret: string, fetch?: Function);
}
//# sourceMappingURL=index.d.ts.map