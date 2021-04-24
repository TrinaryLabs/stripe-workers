import qs from 'qs'
import { PaymentMethodsResponse } from '../../types'
export namespace paymentMethods {
    export let client: Function

    export function create(
        params: {
            type: string
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
            metadata?: object
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
            card?: {
                exp_month: number
                exp_year: number
                number: string
                cvc: string
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
            metadata?: object
            card?: {
                exp_month?: number
                exp_year?: number
            }
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
