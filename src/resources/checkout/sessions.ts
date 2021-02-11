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
        ) : Promise<unknown> {
            return client(
                '/checkout/sessions',
                params,
                'POST',
                stripeAccount 
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            )
        }

        export async function retrieve(id: string, stripeAccount?: string) : Promise<unknown> {
            return client(
                `/checkout/sessions/${id}`,
                {},
                'GET',
                stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            )
        }

        export async function list(
            params: {
                payment_intent?: string,
                subscription?: string,
                limit?: number
                ending_before?: string,
                starting_after?: string
            }, stripeAccount?: string,
        ) : Promise<unknown> {
            return client(
                `/checkout/sessions?limit=${params.limit}&payment_intent=${params.payment_intent}&subscription=${params.subscription}&starting_before=${params.starting_after}&ending_before=${params.ending_before}`,
                {},
                'GET',
                stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            )
        }

        export async function listLineItems(
            id: string,
            params: {
                ending_before?: string,
                limit?: number,
                starting_after?: string,
            },
            stripeAccount?: string,
        ) : Promise<unknown> {
            return client(
                `/checkout/sessions/${id}/line_items?limit=${params.limit}&starting_after=${params.starting_after}&ending_before=${params.ending_before}`,
                {},
                'GET',
                stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            )
        }
    }
}
