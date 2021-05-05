import qs from 'qs'
import { PayoutsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace payouts {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: object
            statement_descriptor?: string
            destination?: string
            method?: string
            source_type?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PayoutsResponse> {
        return client('/payouts', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            status?: string
            arrival_date?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            destination?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PayoutsResponse]
    }> {
        return client(`/payouts?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function cancel(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}/cancel`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function reverse(
        id: string,
        params: {
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}/reverse`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }
}
