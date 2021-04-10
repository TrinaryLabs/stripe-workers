import qs from 'qs'
import { RefundsResponse } from '../../types'
export namespace refunds {
    export let client: Function

    export function create(
        params: {
            charge?: string
            amount?: number
            metadata?: [string, unknown]
            payment_intent?: string
            reason?: unknown // string or null,
            refund_application_fee?: boolean
            reverse_transfer?: boolean
        },
        stripeAccount?: string,
    ): Promise<RefundsResponse> {
        return client('/refunds', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<RefundsResponse> {
        return client(`/refunds/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<RefundsResponse> {
        return client(`/refunds/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            charge?: string
            payment_intent?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [RefundsResponse]
    }> {
        return client(`/refunds?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
