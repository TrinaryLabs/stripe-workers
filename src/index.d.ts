declare global {
    export type StripeCheckoutSessionObject = {
        id: string
        object: string
        allow_promotion_codes: any
        amount_subtotal: any
        amount_total: any
        billing_address_collection: any
        cancel_url: string
        client_reference_id: string
        currency: any
        customer: any
        customer_details: any
        customer_email: any
        livemode: boolean
        locale: any
        metadata: object
        mode: string
        payment_intent: string
        payment_method_types: PaymentMethodTypes
        payment_status: string
        setup_intent: any
        shipping: any
        shipping_address_collection: any
        submit_type: SubmitType
        subscription: any
        success_url: string
        total_details: any
        line_items: any
    }

    export type StripeCheckout = {
        success_url: string
        cancel_url: string
        mode: string
        payment_method_types: Array<string>
        client_reference_id?: string
        customer?: any
        customer_email?: string
        line_items: Array<any>
        metadata?: [string, any]
        allow_promotion_codes?: boolean
        billing_address_collection?: BillingAddressCollection
        discounts?: Array<string>
        locale?: string
        payment_intent_data?: any
        setup_intent_data?: any
        shipping_address_collection?: Array<string>
        submit_type?: SubmitType
        subscription_data?: any
    }

    export enum SubmitType {
        'auto',
        'pay',
        'book',
        'donate',
    }

    export enum BillingAddressCollection {
        'auto',
        'required',
    }

    export enum PaymentMethodTypes {
        'alipay',
        'card',
        'ideal',
        'fpx',
        'bacs_debit',
        'bancontact',
        'giropay',
        'p24',
        'eps',
        'sofort',
        'sepa_debit',
        'grabpay',
    }

    export type StripeCheckoutLineitemsObject = {
        id: string
        limit?: number
        ending_before?: string
        starting_after?: string
    }

    export type StripeCheckoutListSessionsObject = {
        payment_intent?: boolean
        subsciption?: boolean
        limit?: number
        ending_before?: string
        starting_after?: string
    }

    export type StripeAccountLink = {
        account: string
        refresh_url: string
        return_url: string
        type: string
        collect?: string
    }

    export type StripeAccount = {
        type: string
        country?: string
        email?: string
        capabilities?: string
        business_type?: string
        company?: object
        individual?: object
        metadata?: [string, any]
        tos_acceptance?: object
        account_token?: unknown
        business_profile?: object
        default_currency?: string
        documents?: object
        external_account?: unknown
        settings?: object
    }

    export type StripeCustomerPortal = {
        customer: string
        return_url?: string
    }

    export type StripeUsageRecord = {
        quantity: number
        timestamp: number
        action?: string
    }
}

export declare namespace paymentIntents {
    let client: Function;
    function create(params: {
        success_url: string;
        cancel_url: string;
        mode: string;
        payment_method_types: Array<string>;
        client_reference_id?: string;
        customer?: any;
        customer_email?: string;
        line_items: Array<any>;
        metadata?: [string, any];
        allow_promotion_codes?: boolean;
        billing_address_collection?: unknown;
        discounts?: Array<string>;
        locale?: string;
        payment_intent_data?: any;
        setup_intent_data?: any;
        shipping_address_collection?: Array<string>;
        submit_type?: string;
        subscription_data?: any;
    }): any;
    function retrieve(id: string): any;
    function list(params: unknown): any;
    function listLineItems(id: string, params: unknown): any;
}

export declare namespace accounts {
    let client: Function;
    function create(params: unknown): any;
    function retrieve(id: string): any;
    function update(id: string, params: unknown): any;
    function del(id: string): any;
    function reject(id: string, params: unknown): any;
    function list(params: unknown): any;
    function createLoginLink(id: string): any;
}

export declare namespace checkout {
    namespace sessions {
        let client: Function;
        function create(params: {
            success_url: string;
            cancel_url: string;
            mode: string;
            payment_method_types: Array<string>;
            client_reference_id?: string;
            customer?: any;
            customer_email?: string;
            line_items: Array<any>;
            metadata?: [string, any];
            allow_promotion_codes?: boolean;
            billing_address_collection?: unknown;
            discounts?: Array<string>;
            locale?: string;
            payment_intent_data?: any;
            setup_intent_data?: any;
            shipping_address_collection?: Array<string>;
            submit_type?: string;
            subscription_data?: any;
        }, stripeAccount?: string): any;
        function retrieve(id: string, stripeAccount?: string): any;
        function list(params: unknown, stripeAccount?: string): any;
        function listLineItems(id: string, params: unknown, stripeAccount?: string): any;
    }
}

export declare namespace billingPortal {
    namespace sessions {
        let client: Function;
        function create(customer: string, return_url?: string): any;
    }
}

export declare class HTTPClient {
    private STRIPE_SECRET_KEY;
    private Fetch;
    constructor(key: string, customFetch?: Function);
    request: (path: string, body: any, method: string, headers?: object | undefined) => Promise<any>;
}

export class Stripe {
    checkout: typeof checkout;
    paymentIntents: typeof paymentIntents;
    billingPortal: typeof billingPortal;
    accounts: typeof accounts;
    constructor(stripe_secret: string);
}

declare module 'stripe-js';