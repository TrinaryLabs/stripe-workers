import qs from 'qs'
import { CountrySpecsResponse } from '../../types'

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
        object: string
        url: string
        has_more: boolean
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
