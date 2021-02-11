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

export * from '../types/src/resources/billing/billingPortal'
export * from '../types/src/resources/checkout/sessions'
export * from '../types/src/resources/connect/accounts'
export * from '../types/src/resources/paymentIntents'
export * from '../types/src/client'
export * from '../types/src/index'

declare module 'stripe-js';