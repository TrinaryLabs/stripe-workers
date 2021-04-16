import qs from 'qs'
import { EventRetrieveResponse } from '../../types'
export namespace events {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<EventRetrieveResponse> {
        return client(`/events/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            types?: string[]
            created?: object
            delivery_success?: unknown
            ending_before?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [EventRetrieveResponse]
    }> {
        return client(`/events?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
