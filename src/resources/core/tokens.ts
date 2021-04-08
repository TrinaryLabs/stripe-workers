import { TokensResponse } from '../../types'
export namespace tokens {
    export let client: Function

    export function create(
        params: {
            card?: {
                number?: string
                exp_month?: number
                exp_year?: number
                currency?: string
                cvc?: string
                name?: string
                address_line1?: string
                address_line2?: string
                address_city?: string
                address_state?: string
                address_zip?: string
                address_country?: string
            }
            bank_account?: {
                country?: string
                currency?: string
                account_holder_name?: string
                account_holder_type?: string
                routing_number?: string
                account_number?: string
            }
            pii?: {
                id_number?: string
            }
            account?: {
                business_type?: string
                company?: object
                individual?: object
                tos_shown_and_accepted?: boolean
            }
            person?: {
                address?: object
                address_kana?: object
                address_kanji?: object
                dob?: object
                email?: string
                first_name?: string
                first_name_kana?: string
                first_name_kanji?: string
                gender?: string
                id_number?: string
                last_name?: string
                last_name_kana?: string
                last_name_kanji?: string
                maiden_name?: string
                metadata?: [string, unknown]
                nationality?: string
                phone?: string
                political_exposure?: boolean
                relationship?: object
                ssn_last_4?: number
                verification?: object
            }
            cvc_update?: {
                cvc?: string
            }
        },
        stripeAccount?: string,
    ): Promise<TokensResponse> {
        return client('/tokens', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TokensResponse> {
        return client(`/tokens/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
