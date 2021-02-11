export namespace paymentIntents {
    export let client: Function

    export function create(params: {
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
        billing_address_collection?: unknown
        discounts?: Array<string>
        locale?: string
        payment_intent_data?: any
        setup_intent_data?: any
        shipping_address_collection?: Array<string>
        submit_type?: string
        subscription_data?: any
    }) : Promise<unknown> {
        return client('/payment_intents', params, 'POST')
    }

    export function retrieve(id: string) : Promise<unknown> {
        return client(`/payment_intents/${id}`, {}, 'GET')
    }

    export function list(params: unknown) : Promise<unknown> {
        return client('/checkout/sessions', {}, 'GET')
    }

    export function listLineItems(id: string, params: unknown) : Promise<unknown> {
        return client(`/checkout/sessions/${id}/line_items`, {}, 'GET')
    }
}
