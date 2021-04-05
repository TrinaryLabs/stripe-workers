type TokensResponse = {
    id: string
    object: string
    bank_account: {
        id: string
        object: string
        account_holder_name: string
        account_holder_type: string
        bank_name: string
        country: string
        currency: string
        fingerprint: string
        last4: string
        routing_number: string
        status: string
    }
    card: {
        id: string
        object: string
        address_city: string
        address_country: string
        address_line1: string
        address_line1_check: string
        address_line2: string
        address_state: string
        address_zip: string
        address_zip_check: string
        brand: string
        country: string
        currency: string
        cvc_check: string
        dynamic_last4: string
        exp_month: number
        exp_year: number
        fingerprint: string
        funding: string
        last4: string
        metadata: object
        name: string
        tokenization_method: string
    }
    client_ip: string
    created: number
    livemode: boolean
    type: string
    used: boolean
}

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
