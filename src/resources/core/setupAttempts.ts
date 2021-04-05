import qs from 'qs'

type SetupAttenptsResponse = {
    id: string
    object: string
    application: string
    created: number
    customer: string
    livemode: boolean
    on_behalf_of: string
    payment_method: string
    payment_method_details: {
        au_becs_debit: object
        bacs_debit: object
        bancontact: {
            bank_code: string
            bank_name: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
            verified_name: string
        }
        card: {
            three_d_secure: {
                authentication_flow: string
                result: string
                result_reason: string
                version: string
            }
        }
        card_present: {
            generated_card: string
        }
        ideal: {
            bank: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            verified_name: string
        }
        sepa_debit: object
        sofort: {
            bank_code: string
            bank_name: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
            verified_name: string
        }
        type: string
    }
    setup_error: {
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
            fpx: {
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
        paymnet_method_type: string
        type: string
    }
    setup_intent: string
    status: string
    usage: string
}

export namespace setupAttempts {
    export let client: Function

    export function list(
        params: {
            setup_intent: string
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
        data: [SetupAttenptsResponse]
    }> {
        return client(`/setup_attempts?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
