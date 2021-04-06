import qs from 'qs'
import { StripeAPIError } from '../../error'

type PaymentMethodsResponse = {
    id: string
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
    customer: string
    metadata: object
    type: string
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
}

export namespace paymentMethods {
    export let client: Function

    export function create(
        params: {
            type: string
            billing_details?: object
            metadata?: [string, unknown]
            afterpay_clearpay?: object
            alipay?: object
            au_becs_debit?: object
            bacs_debit?: object
            bancontact?: object
            card?: object
            eps?: object
            fpx?: object
            giropay?: object
            grabpay?: object
            ideal?: object
            interac_present?: object
            oxxo?: object
            p24?: object
            sepa_debit?: object
            sofort?: object
        },
        stripeAccount?: string,
    ): Promise<PaymentMethodsResponse> {
        return client('/payment_methods', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PaymentMethodsResponse> {
        return client(`/payment_methods/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            billing_details?: object
            metadata?: [string, unknown]
            card?: object
        },
        stripeAccount?: string,
    ): Promise<PaymentMethodsResponse> {
        return client(`/payment_methods/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer: string
            type: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: false
        data: [PaymentMethodsResponse]
    }> {
        return client(`/payment_methods?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function attach(
        id: string,
        params: {
            customer: string
        },
        stripeAccount?: string,
    ): Promise<PaymentMethodsResponse> {
        return client(`/payment_methods/${id}/attach`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function detach(
        id: string,
        stripeAccount?: string,
    ): Promise<PaymentMethodsResponse> {
        return client(`/payment_methods/${id}/detach`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
