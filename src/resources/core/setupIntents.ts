import qs from 'qs'

type SetupIntentsResponse = {
    id: string
    client_secret: string
    customer: string
    description: string
    last_setup_error: {
        code: string
        decline_code: string
        doc_url: string
        message: string
        param: string
        payment_method: {
            id: string
            object: string
            afterpay_clearpay: object
            alipay: object
            au_becs_debit: {
                bsb_number: string
                fingerprint: string
                last4: string
            }
            bacs_debit: {
                fingerprint: string
                last4: string
                sort_code: string
            }
            bancontact: object
            billing_details: {
                address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                phone: string
            }
            card: {
                brand: string
                checks: {
                    address_line1_check: string
                    address_postal_code_check: string
                    cvc_check: string
                }
                country: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                generated_from: {
                    charge: string
                    card_present: {
                        brand: string
                        cardholder_name: string
                        country: string
                        emv_auth_data: string
                        exp_month: number
                        exp_year: number
                        fingerprint: string
                        funding: string
                        generated_card: string
                        last4: string
                        network: string
                        read_method: string
                        receipt: {
                            account_type: string
                            application_cryptogram: string
                            application_preferred_name: string
                            authorization_code: string
                            authorization_response_code: string
                            cardholder_verification_method: string
                            dedicated_file_name: string
                            terminal_verification_results: string
                            transaction_status_information: string
                        }
                        type: string
                    }
                    setup_attempt: string
                }
                last4: string
                networks: {
                    available: [string]
                    preferred: string
                }
                three_d_secure_usage: {
                    supported: boolean
                }
                wallet: {
                    amex_express_checkout: object
                    apple_pay: object
                    dynamic_last4: string
                    google_pay: object
                    masterpass: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                    samsung_pay: object
                    type: string
                    visa_checkout: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                }
            }
            card_present: object
            created: number
            customer: string
            eps: {
                bank: string
            }
            fps: {
                bank: string
            }
            giropay: object
            grabpay: object
            ideal: {
                bank: string
                bic: string
            }
            interac_present: object
            livemode: boolean
            metadata: object
            oxxo: object
            p24: {
                bank: string
            }
            sepa_debit: {
                bank_code: string
                branch_code: string
                country: string
                fingerprint: string
                generated_from: {
                    charge: string
                    setup_attempt: string
                }
                last4: string
            }
            sofort: {
                country: string
            }
            type: string
        }
        payment_method_type: string
        type: string
    }
    metadata: object
    next_action: {
        redirect_to_url: {
            return_url: string
            url: string
        }
        type: string
        use_stripe_sdk: object
    }
    payment_method: string
    payment_method_types: [string]
    status: string
    usage: string
    object: string
    application: string
    cancellation_reason: string
    created: number
    latest_attempt: string
    livemode: boolean
    mandate: string
    on_behalf_of: string
    payment_method_options: {
        card: {
            request_three_d_secure: string
        }
        sepa_debit: {
            mandate_options: object
        }
    }
    single_use_mandate: string
}

export namespace setupIntents {
    export let client: Function

    export function create(
        params: {
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            payment_method?: string
            payment_method_types?: string[]
            usage?: string
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_options?: unknown
            return_url?: string
            single_use?: object
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse> {
        return client('/setup_intents', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse> {
        return client(
            `/setup_intents/${id}?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: [string, unknown]
            payment_method?: string
            payment_method_types?: string[]
            payment_method_options?: unknown
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse> {
        return client(`/setup_intents/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function confirm(
        id: string,
        params: {
            payment_method?: unknown
            mandate_data?: object
            payment_method_options?: object
            return_url?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse> {
        return client(`/setup_intents/${id}/confirm`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse> {
        return client(`/setup_intents/${id}/cancel`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer?: string
            payment_method?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SetupIntentsResponse]
    }> {
        return client(`/setup_intents?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
