import qs from 'qs'

type CheckoutSessionsResponse = {
    id: string
    cancel_url: string
    client_reference_id: string | undefined
    customer: string | undefined
    customer_email: string | undefined
    line_items: {

    }
    metadata: object
    mode: string
    payment_intent: string
    payment_method_types: [string]
    payment_status: string
    success_url: string
    object: string
    allow_promotion_codes: boolean | undefined
    amount_subtotal: number | undefined
    amount_total: number | undefined
    billing_address_collection: string
    currency: string | undefined
    customer_details: {
        email: string
        tax_exempt: string
        tax_ids: [
            {
                type: string
                value: string
            }
        ]
    }
    livemode: boolean
    locale: string | undefined
    payment_method_options: object
    setup_intent: string | undefined
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        name: string
    }
    shipping_address_collection: {
        allowed_countries: [string]
    }
    submit_type: string | undefined
    subscription: string
    total_details: {
        amount_discount: number
        amount_shipping: number
        amount_tax: number
        breakdown: {
            discounts: [
                {
                    amount: number
                    discount: object
                }
            ]
            taxes: [
                {
                    amount: number
                    rate: {
                        id: string
                        object: string
                        active: boolean
                        country: string
                        created: number
                        description: string
                        display_name: string
                        inclusive: boolean
                        jurisdiction: string
                        livemode: boolean
                        metadata: object
                        percentage: number
                        state: string 
                    }
                }
            ]
        }
    }
}
export namespace checkout {
    export namespace sessions {
        export let client: Function

        export async function create(
            params: {
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
            },
            stripeAccount?: string,
        ): Promise<CheckoutSessionsResponse> {
            return client('/checkout/sessions', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export async function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<CheckoutSessionsResponse> {
            return client(`/checkout/sessions/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export async function list(
            params: {
                payment_intent?: string
                subscription?: string
                limit?: number
                ending_before?: string
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<CheckoutSessionsResponse> {
            return client(
                `/checkout/sessions?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: stripeAccount
                        ? { 'Stripe-Account': stripeAccount }
                        : {},
                },
            )
        }

        export async function listLineItems(
            id: string,
            params: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<CheckoutSessionsResponse> {
            return client(
                `/checkout/sessions/${id}/line_items?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: stripeAccount
                        ? { 'Stripe-Account': stripeAccount }
                        : {},
                },
            )
        }
    }
}
