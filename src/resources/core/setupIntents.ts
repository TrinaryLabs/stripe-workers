import qs from 'qs'
import { SetupIntentsResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace setupIntents {
    export let client: Function

    export function create(
        params: {
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: object
            payment_method?: string
            payment_method_types?: Array<string>
            usage?: string
            mandate_data?: {
                customer_acceptance: {
                    type: string
                    accepted_at?: number
                    offline?: {}
                    online?: {
                        ip_address: string
                        user_agent: string
                    }
                }
            }
            on_behalf_of?: string
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
                card?: {
                    request_three_d_secure?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
            }
            return_url?: string
            single_use?: {
                amount: number
                currency: string
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        params: {
            client_secret?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents/${id}?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: object
            payment_method?: string
            payment_method_types?: Array<string>
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
                card?: {
                    request_three_d_secure?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function confirm(
        id: string,
        params: {
            payment_method?: string
            mandate_data?: {
                customer_acceptance: {
                    type: string
                    accepted_at?: number
                    offline?: {}
                    online?: {
                        ip_address: string
                        user_agent: string
                    }
                }
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
                card?: {
                    request_three_d_secure?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
            }
            return_url?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents/${id}/confirm?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents/${id}/cancel?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function list(
        params?: {
            customer?: string
            payment_method?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
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
        data: [SetupIntentsResponse]
    }> {
        return client(
            `/setup_intents?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
