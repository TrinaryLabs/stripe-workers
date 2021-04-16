import qs from 'qs'
import { CheckoutSessionsResponse } from '../../types'
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
            params?: {
                payment_intent?: string
                subscription?: string
                limit?: number
                ending_before?: string
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CheckoutSessionsResponse]
        }> {
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
            params?: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CheckoutSessionsResponse]
        }> {
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
