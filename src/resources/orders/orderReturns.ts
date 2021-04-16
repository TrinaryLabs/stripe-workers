import qs from 'qs'
import { OrderReturnsResponse } from '../../types'

export namespace orderReturns {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<OrderReturnsResponse> {
        return client(`/order_returns/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            order?: string
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
        data: [OrderReturnsResponse]
    }> {
        return client(`/order_returns?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
