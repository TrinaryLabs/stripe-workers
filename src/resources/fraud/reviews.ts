import qs from 'qs'
import { ReviewsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace reviews {
    export let client: Function

    export function approve(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}/approve?${qs.stringify(settings?.expand)}`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ReviewsResponse]
    }> {
        return client(`/reviews?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
