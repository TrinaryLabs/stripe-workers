import qs from 'qs'
import { EventRetrieveResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace events {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<EventRetrieveResponse> {
        return client(`/events/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            types?: Array<string>
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            delivery_success?: boolean
            ending_before?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [EventRetrieveResponse]
    }> {
        return client(`/events?${qs.stringify(params)}`, params, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
