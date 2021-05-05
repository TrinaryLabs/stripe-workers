import qs from 'qs'
import { TransfersResponse, TransfersReversalResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace transfers {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            destination: string
            description?: string
            metadata?: object
            source_transaction?: string
            source_type?: string
            transfer_group?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<TransfersResponse> {
        return client(`/transfers`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<TransfersResponse> {
        return client(`/transfers/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            description?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<TransfersResponse> {
        return client(`/transfers/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            destination?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            starting_after?: string
            transfer_group?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TransfersResponse]
    }> {
        return client(`/topups?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function createReversal(
        id: string,
        params: {
            amount: number
            description?: string
            metadata?: object
            refund_application_fee?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<TransfersReversalResponse> {
        return client(`/transfers/${id}/reversals`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieveReversal(
        id: string,
        rever_id: string,
        settings?: { stripeAccount?: string },
    ): Promise<TransfersReversalResponse> {
        return client(`/transfers/${id}/reversals/${rever_id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function updateReversal(
        id: string,
        rever_id: string,
        params: {
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<TransfersReversalResponse> {
        return client(
            `/transfers/${id}/reversals/${rever_id}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function listReversals(
        id: string,
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TransfersReversalResponse]
    }> {
        return client(
            `/transfer/${id}/reversals?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
