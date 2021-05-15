import qs from 'qs'
import {
    ApplicationFeesResponse,
    ApplicationFeesRefundResponse,
} from '../../types'
import { returnToHeaders } from '../../util'

export namespace applicationFees {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<ApplicationFeesResponse> {
        return client(`/application_fees/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            limit?: number
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
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
        data: [ApplicationFeesResponse]
    }> {
        return client(`/application_fees?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function createRefund(
        id: string,
        params: {
            amount?: number
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<ApplicationFeesRefundResponse> {
        return client(`/application_fees/${id}/refunds?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieveRefund(
        fee_id: string,
        refund_id: string,
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}?${qs.stringify(settings?.expand)}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function updateRefund(
        fee_id: string,
        refund_id: string,
        params: {
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}?${qs.stringify(settings?.expand)}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function listRefunds(
        id: string,
        params?: {
            limit?: number
            ending_before?: string
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
        data: [ApplicationFeesRefundResponse]
    }> {
        return client(
            `/application_fees/${id}/refunds?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
