import qs from 'qs'
import { OrdersResponse } from '../../types'

export namespace orders {
    export let client: Function

    export function create(
        params: {
            currency: string
            customer?: string
            email?: string
            items?: object
            metadata?: object
            shipping?: object
            coupon?: string
        },
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client('/orders', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: object
            shipping?: object
            status?: string
            coupon?: string
            selected_shipping_method?: unknown
        },
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function pay(
        id: string,
        params: {
            customer?: string
            source?: unknown
            email?: string
            metadata?: object
            application_fee?: number
        },
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            customer?: string
            status?: string
            created?: number
            ending_before?: string
            ids?: string[]
            limit?: number
            starting_after?: string
            status_transitions?: object
            upstream_ids?: string[]
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [OrdersResponse]
    }> {
        return client(`/orders?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function returnOrder(
        id: string,
        params: {
            items?: object
        },
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        amount: number
        created: number
        currency: string
        items: [object]
        livemode: boolean
        order: string
        refund: string
    }> {
        return client(`/orders/${id}/returns`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
