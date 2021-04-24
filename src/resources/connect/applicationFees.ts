import qs from 'qs'
import {
    ApplicationFeesResponse,
    ApplicationFeesRefundResponse,
} from '../../types'

export namespace applicationFees {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesResponse> {
        return client(`/application_fees/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesResponse]
    }> {
        return client(`/application_fees?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createRefund(
        id: string,
        params: {
            amount?: number
            metadata?: object
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(`/application_fees/${id}/refunds`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveRefund(
        fee_id: string,
        refund_id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function updateRefund(
        fee_id: string,
        refund_id: string,
        params: {
            metadata?: object
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
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
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesRefundResponse]
    }> {
        return client(
            `/application_fees/${id}/refunds?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
