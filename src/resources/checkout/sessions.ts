import qs from 'qs'
import { CheckoutSessionsResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace checkout {
    export let client: Function
    export namespace sessions {
        export async function create(
            params: {
                success_url: string
                cancel_url: string
                mode: string
                payment_method_types: Array<string>
                client_reference_id?: string
                customer?: string
                customer_email?: string
                line_items: [
                    {
                        price?: string
                        price_data?: {
                            currency: string
                            product?: string
                            product_data?: {
                                name: string
                                description?: string
                                images?: [string]
                                metadata?: object
                            }
                            unit_amount?: number
                            unit_amount_decimal?: number
                            recurring?: {
                                interval: string
                                interval_count?: number
                            }
                        }
                        adjustable_quantity?: {
                            enabled: boolean
                            maximum?: number
                            minimum?: number
                        }
                        amount?: number
                        currency?: string
                        description?: string
                        dynamic_tax_rates?: [string]
                        images?: [string]
                        name?: string
                        quantity?: number
                        tax_rates?: [string]
                    },
                ]
                metadata?: object
                allow_promotion_codes?: boolean
                billing_address_collection?: string
                discounts?: Array<string>
                locale?: string
                payment_intent_data?: {
                    application_fee_amount?: number
                    capture_method?: string
                    description?: string
                    metadata?: object
                    on_behalf_of?: string
                    receipt_email?: string
                    setup_future_usage?: string
                    shipping?: {
                        address: {
                            city?: string
                            country?: string
                            line1: string
                            line2?: string
                            postal_code?: string
                            state?: string
                        }
                        name: string
                        carrier?: string
                        phone?: string
                        tracking_number?: string
                    }
                    statement_descriptor?: string
                    statement_descriptor_suffix?: string
                    transfer_data?: {
                        destination: string
                        amount?: number
                    }
                    transfer_group?: string
                }
                payment_method_options?: {
                    acss_debit?: {
                        currency?: string
                        mandate_options?: {
                            custom_mandate_url?: string
                            interval_description?: string
                            payment_schedule?: string
                            transaction_type?: string
                        }
                        verification_method?: string
                    }
                }
                setup_intent_data?: {
                    description?: string
                    metadata?: object
                    on_behalf_of?: string
                }
                shipping_address_collection?: Array<string>
                shipping_rates?: string
                submit_type?: string
                subscription_data?: {
                    application_fee_percent?: number
                    default_tax_rates?: string
                    items?: [
                        {
                            plan: string
                            quantity?: number
                            tax_rates?: [string]
                        },
                    ]
                    metadata?: object
                    transfer_data?: {
                        destination: string
                        amount_percent?: number
                    }
                    trial_end?: number
                    trial_period_days?: number
                }
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<CheckoutSessionsResponse> {
            return client(
                `/checkout/sessions?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }

        export async function retrieve(
            id: string,
            settings?: {
                stripeAccount?: string
                expand?: Array<string>
            },
        ): Promise<CheckoutSessionsResponse> {
            return client(
                `/checkout/sessions/${id}?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }

        export async function list(
            params?: {
                payment_intent?: string
                subscription?: string
                limit?: number
                ending_before?: string
                starting_after?: string
            },
            settings?: {
                stripeAccount?: string
                expand?: Array<string>
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CheckoutSessionsResponse]
        }> {
            return client(
                `/checkout/sessions?${qs.stringify(params)}&${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
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
            settings?: {
                stripeAccount?: string
                expand?: Array<string>
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CheckoutSessionsResponse]
        }> {
            return client(
                `/checkout/sessions/${id}/line_items?${qs.stringify(
                    params,
                )}&${qs.stringify({ expand: settings?.expand })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
}
