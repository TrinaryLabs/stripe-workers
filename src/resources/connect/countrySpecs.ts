import qs from 'qs'
import { CountrySpecsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace countrySpecs {
    export let client: Function

    export function list(
        params?: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CountrySpecsResponse]
    }> {
        return client(`/country_specs?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<CountrySpecsResponse> {
        return client(`/country_specs/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
