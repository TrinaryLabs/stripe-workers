import qs from 'qs'

type CountrySpecsResponse = {
    id: string,
    object: string,
    default_currency: string,
    supported_bank_account_currencies: object,
    supported_payment_currencies: [string],
    supported_payment_methods: [string],
    supported_transfer_countries: [string],
    verification_fields: object
}

export namespace countrySpecs {
    export let client: Function

    export function list(
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string,
        url: string,
        has_more: boolean,
        data: [CountrySpecsResponse]
    }> {
        return client(`/country_specs?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CountrySpecsResponse> {
        return client(`/country_specs/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
