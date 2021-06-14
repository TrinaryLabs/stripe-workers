import qs from 'qs'
import { PaymentIntentsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace paymentIntents {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: object
            off_session?: boolean
            payment_method?: string
            payment_method_types?: Array<string>
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
            application_fee_amount?: number
            capture_method?: string
            confirmation_method?: string
            error_on_requires_action?: boolean
            mandate?: string
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
            payment_method_data?: {
                type: string
                acss_debit?: {
                    account_number: string
                    institution_number: string
                    transit_number: string
                }
                afterpay_clearpay?: {}
                alipay?: {}
                au_becs_debit?: {
                    account_number: string
                    bsb_number: string
                }
                bacs_debit?: {
                    account_number?: string
                    sort_code?: string
                }
                bancontact?: {}
                billing_details?: {
                    address?: {
                        city?: string
                        country?: string
                        line1?: string
                        line2?: string
                        postal_code?: string
                        state?: string
                    }
                    email?: string
                    name?: string
                    phone?: string
                }
                eps?: {
                    bank?: string
                }
                fpx?: {
                    bank: string
                }
                giropay?: {}
                grabpay?: {}
                ideal?: {
                    bank?: string
                }
                interac_present?: {}
                metadata?: object
                oxxo?: {}
                p24?: {
                    bank?: string
                }
                sepa_debit?: {
                    iban: string
                }
                sofort?: {
                    country: string
                }
            }
            payment_method_options?: {
                acss_debit?: {
                    mandate_options?: {
                        custom_mandate_url?: string
                        interval_description?: number
                        payment_schedule?: string
                        transaction_type?: string
                    }
                    verification_method?: string
                }
                alipay?: {}
                bancontact?: {
                    preferred_language?: string
                }
                card?: {
                    cvc_token?: string
                    installments?: {
                        enabled?: boolean
                        plan?: {
                            count: number
                            interval: number
                            type: string
                        }
                    }
                    network?: string
                    request_three_d_secure?: string
                }
                oxxo?: {
                    expires_after_days?: number
                }
                p24?: {
                    tos_shown_and_accepted?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
                sofort?: {
                    preferred_language?: string
                }
            }
            return_url?: string
            transfer_data?: {
                destination: string
                amount?: number
            }
            transfer_group?: string
            use_stripe_sdk?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        params?: {
            client_secret?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}?${qs.stringify(params)}&${qs.stringify({
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
            amount?: number
            currency?: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: object
            off_session?: boolean
            payment_method?: string
            payment_method_types?: Array<string>
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
            application_fee_amount?: number
            capture_method?: string
            confirmation_method?: string
            error_on_requires_action?: boolean
            mandate?: string
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
            payment_method_data?: {
                type: string
                acss_debit?: {
                    account_number: string
                    institution_number: string
                    transit_number: string
                }
                afterpay_clearpay?: {}
                alipay?: {}
                au_becs_debit?: {
                    account_number: string
                    bsb_number: string
                }
                bacs_debit?: {
                    account_number?: string
                    sort_code?: string
                }
                bancontact?: {}
                billing_details?: {
                    address?: {
                        city?: string
                        country?: string
                        line1?: string
                        line2?: string
                        postal_code?: string
                        state?: string
                    }
                    email?: string
                    name?: string
                    phone?: string
                }
                eps?: {
                    bank?: string
                }
                fpx?: {
                    bank: string
                }
                giropay?: {}
                grabpay?: {}
                ideal?: {
                    bank?: string
                }
                interac_present?: {}
                metadata?: object
                oxxo?: {}
                p24?: {
                    bank?: string
                }
                sepa_debit?: {
                    iban: string
                }
                sofort?: {
                    country: string
                }
            }
            payment_method_options?: {
                acss_debit?: {
                    mandate_options?: {
                        custom_mandate_url?: string
                        interval_description?: number
                        payment_schedule?: string
                        transaction_type?: string
                    }
                    verification_method?: string
                }
                alipay?: {}
                bancontact?: {
                    preferred_language?: string
                }
                card?: {
                    cvc_token?: string
                    installments?: {
                        enabled?: boolean
                        plan?: {
                            count: number
                            interval: number
                            type: string
                        }
                    }
                    network?: string
                    request_three_d_secure?: string
                }
                oxxo?: {
                    expires_after_days?: number
                }
                p24?: {
                    tos_shown_and_accepted?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
                sofort?: {
                    preferred_language?: string
                }
            }
            return_url?: string
            transfer_data?: {
                destination: string
                amount?: number
            }
            transfer_group?: string
            use_stripe_sdk?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}?${qs.stringify({
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
        params?: {
            payment_method?: string
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
            error_on_requires_action?: boolean
            mandate?: string
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
            off_session?: boolean
            payment_method_data?: {
                type: string
                acss_debit?: {
                    account_number: string
                    institution_number: string
                    transit_number: string
                }
                afterpay_clearpay?: {}
                alipay?: {}
                au_becs_debit?: {
                    account_number: string
                    bsb_number: string
                }
                bacs_debit?: {
                    account_number?: string
                    sort_code?: string
                }
                bancontact?: {}
                billing_details?: {
                    address?: {
                        city?: string
                        country?: string
                        line1?: string
                        line2?: string
                        postal_code?: string
                        state?: string
                    }
                    email?: string
                    name?: string
                    phone?: string
                }
                eps?: {
                    bank?: string
                }
                fpx?: {
                    bank: string
                }
                giropay?: {}
                grabpay?: {}
                ideal?: {
                    bank?: string
                }
                interac_present?: {}
                metadata?: object
                oxxo?: {}
                p24?: {
                    bank?: string
                }
                sepa_debit?: {
                    iban: string
                }
                sofort?: {
                    country: string
                }
            }
            payment_method_options?: {
                acss_debit?: {
                    mandate_options?: {
                        custom_mandate_url?: string
                        interval_description?: number
                        payment_schedule?: string
                        transaction_type?: string
                    }
                    verification_method?: string
                }
                alipay?: {}
                bancontact?: {
                    preferred_language?: string
                }
                card?: {
                    cvc_token?: string
                    installments?: {
                        enabled?: boolean
                        plan?: {
                            count: number
                            interval: number
                            type: string
                        }
                    }
                    network?: string
                    request_three_d_secure?: string
                }
                oxxo?: {
                    expires_after_days?: number
                }
                p24?: {
                    tos_shown_and_accepted?: string
                }
                sepa_debit?: {
                    mandate_options?: {}
                }
                sofort?: {
                    preferred_language?: string
                }
            }
            payment_method_types?: Array<string>
            return_url?: string
            use_stripe_sdk?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}/confirm?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function capture(
        id: string,
        params?: {
            amount_to_capture?: number
            application_fee_amount?: number
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            transfer_data?: {
                amount?: number
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}/capture?${qs.stringify({
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
        params?: {
            cancellation_reason?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}/confirm?${qs.stringify({
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
        data: [PaymentIntentsResponse]
    }> {
        return client(
            `/payment_intents?${qs.stringify(params)}&${qs.stringify({
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
