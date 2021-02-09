export {};
declare global {

    type StripeCheckoutSessionObject = {
        id: string,
        object: string,
        allow_promotion_codes: any,
        amount_subtotal: any,
        amount_total: any,
        billing_address_collection: any,
        cancel_url: string,
        client_reference_id: string,
        currency: any,
        customer: any,
        customer_details: any,
        customer_email: any,
        livemode: boolean,
        locale: any,
        metadata: object,
        mode: string,
        payment_intent: string,
        payment_method_types: PaymentMethodTypes, 
        payment_status: string,
        setup_intent: any,
        shipping: any,
        shipping_address_collection: any,
        submit_type: SubmitType,
        subscription: any,
        success_url: string,
        total_details: any,
        line_items: any
    }

    type StripeCheckoutSession = {
        success_url: string,
        cancel_url: string,
        mode: string,
        payment_method_types: Array<string>,
        client_reference_id?: string,
        customer?: any,
        customer_email?: string,
        line_items: Array<any>,
        metadata?: [string, any],
        allow_promotion_codes?: boolean,
        billing_address_collection?: BillingAddressCollection,
        discounts?: Array<string>, 
        locale?: string,
        payment_intent_data?: any,
        setup_intent_data?: any,
        shipping_address_collection?: Array<string>,
        submit_type?: SubmitType,
        subscription_data?: any
    }

    enum SubmitType {
        'auto',
        'pay',
        'book',
        'donate'
    }

    enum BillingAddressCollection {
        'auto',
        'required'
    }

    enum PaymentMethodTypes {
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
        'grabpay'
    }

    type StripeCheckoutLineitemsObject = {
        id: string,
        limit?: number,
        ending_before?: string,
        starting_after?: string
    }

    type StripeCheckoutListSessionsObject = {
        payment_intent?: boolean,
        subsciption?: boolean,
        limit?: number,
        ending_before?: string,
        starting_after?: string
    }
}