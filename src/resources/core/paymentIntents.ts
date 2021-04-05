import qs from 'qs'

type PaymentIntentsResponse = {
    id: string
    amount: number
    charges: {
        object: string
        data: [
            object
        ] // charge object
        has_more: boolean
        url: string
    }
    client_secret: string
    currency: string
    customer: string
    description: string
    last_payment_error: {
        charge: string
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
                number: string
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
        alipay_handle_redirect: {
            native_data: string
            native_url: string
            return_url: string
            url: string
        }
        oxxo_display_details: {
            expires_after: number
            hosted_voucher_url: string
            number: string
        }
        redirect_to_url: {
            return_url: string
            url: string
        }
        type: string
        use_stripe_sdk: object //stripe specific we do not know the format
    }
    payment_method: string
    payment_method_types: [string]
    receipt_email: string
    setup_future_usage: string
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    statement_descriptor: string
    statement_descriptor_suffix: string
    status: string
    object: string
    amount_capturable: number
    amount_received: number
    application: string
    application_fee_amount: number
    canceled_at: number
    cancellation_reason: string
    capture_method: string
    confirmation_method: string
    created: number
    invoice: string
    livemode: boolean
    on_behalf_of: string
    payment_method_options: {
        alipay: object
        bancontact: {
            preferred_language: string
        }
        card: {
            installments: {
                available_plans: {
                    count: number
                    interval: string
                    type: string
                }
                enabled: boolean
                plan: {
                    count: number
                    interval: string
                    type: string
                }
                network: string
                request_three_d_secure: string
            }
        }
        oxxo: {
            expires_after_days: number
        }
        p24: object
        sepa_debit: {
            mandate_options: object
        }
        sofort: {
            preferred_language: string
        }
    }
    review: string
    transfer_data: {
        amount: number
        destination: string
    }
    transfer_group: string
}

export namespace paymentIntents {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client('/payment_intents', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret?: string
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}?${qs.stringify(params)}`,
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
            amount?: number
            currency?: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function confirm(
        id: string,
        params: {
            payment_method?: unknown
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            error_on_requires_action?: unknown
            mandate?: string
            mandate_data?: object
            off_session?: unknown
            payment_method_data?: object
            payment_method_options?: object
            payment_method_types?: string[]
            return_url?: string
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function capture(
        id: string,
        params: {
            amount_to_capture?: number
            application_fee_amount?: number
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            transfer_data?: object
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/capture`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer?: string
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
        data: [PaymentIntentsResponse]
    }> {
        return client(
            `/payment_intents?${qs.stringify(params)}`,
            params,
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
