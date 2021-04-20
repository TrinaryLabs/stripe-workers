import qs from 'qs'
import { SourcesResponse } from '../../types'
export namespace sources {
    export let client: Function

    export function create(
        params: {
            type: string
            amount?: number
            currency?: string
            metadata?: object
            owner?: object
            redirect?: object
            statement_descriptor?: string
            flow?: string
            mandate?: object
            receiver?: object
            source_order?: object
            token?: string
            usage?: string
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client('/sources', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret: string
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client(`/sources/${id}?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            amount?: number
            metadata?: object
            owner?: object
            mandate?: object
            source_order?: object
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client(`/sources/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
