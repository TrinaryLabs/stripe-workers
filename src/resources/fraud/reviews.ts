import qs from 'qs'
import { ReviewsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace reviews {
    export let client: Function

    export function approve(
        id: string,
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}/approve`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
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
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ReviewsResponse]
    }> {
        return client(`/reviews?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }
}
