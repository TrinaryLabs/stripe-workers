import { checkout } from './resources/checkout/sessions';
import { paymentIntents } from './resources/paymentIntents';
import { billingPortal } from './resources/billing/billingPortal';
import { customers } from './resources/customers';
import { accounts } from './resources/connect/accounts';
import { accountLinks } from './resources/connect/accountLinks';
import { applicationFees } from './resources/connect/applicationFees';
import { countrySpecs } from './resources/connect/countrySpecs';
import { topups } from './resources/connect/topups';
import { transfers } from './resources/connect/transfers';
export declare class Stripe {
    checkout: typeof checkout;
    paymentIntents: typeof paymentIntents;
    billingPortal: typeof billingPortal;
    accounts: typeof accounts;
    customers: typeof customers;
    accountLinks: typeof accountLinks;
    applicationFees: typeof applicationFees;
    countrySpecs: typeof countrySpecs;
    topups: typeof topups;
    transfers: typeof transfers;
    constructor(stripe_secret: string, params: {
        apiVersion?: string;
        fetch?: Function;
        userAgent?: string;
    });
}
//# sourceMappingURL=index.d.ts.map