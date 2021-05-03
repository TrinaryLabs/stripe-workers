import qs from 'qs'
import { TopUpsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace topups {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: object
            source?: string
            statement_descriptor?: string
            transfer_group?: string
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<TopUpsResponse> {
        return client('/topups', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function update(
        id: string,
        params: {
            description?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            status?: string
            amount?: {
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
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TopUpsResponse]
    }> {
        return client(`/topups?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function cancel(
        id: string,
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}/cancel`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }
}
