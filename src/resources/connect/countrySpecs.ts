import qs from 'qs'

export namespace countrySpecs {
    export let client: Function

    export function list(
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/country_specs?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/country_specs/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
