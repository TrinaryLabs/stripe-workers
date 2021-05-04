import qs from 'qs'
import { OrdersResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace orders {
    export let client: Function

    export function create(
        params: {
            currency: string
            customer?: string
            email?: string
            items?: [
                {
                    amount?: number
                    currency?: string
                    description?: string
                    parent?: string
                    quantity?: number
                    type?: string
                }
            ]
            metadata?: object
            shipping?: {
                address: {
                    line1: string
                    line2?: string
                    city?: string
                    country?: string
                    postal_code?: string
                    state?: string
                }
                name: string
                phone?: string
            }
            coupon?: string
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<OrdersResponse> {
        return client('/orders', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: object
            shipping?: {
                carrier: string
                tracking_number: string
            }
            status?: string
            coupon?: string
            selected_shipping_method?: string
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function pay(
        id: string,
        params: {
            customer?: string
            source?: string
            email?: string
            metadata?: object
            application_fee?: number
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            customer?: string
            status?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            ids?: string[]
            limit?: number
            starting_after?: string
            status_transitions?: {
                canceled?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                fulfilled?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                paid?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                returned?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
            }
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
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function returnOrder(
        id: string,
        params: {
            items?: [
                {
                    amount?: number
                    currency?: string
                    description?: string
                    parent?: string
                    quantity?: number
                    type?: string
                }
            ]
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<{
        id: string
        object: string
        amount: number
        created: number
        currency: string
        items: [
            {
                amount?: number
                currency?: string
                description?: string
                parent?: string
                quantity?: number
                type?: string
            }
        ]
        livemode: boolean
        order: string
        refund: string
    }> {
        return client(`/orders/${id}/returns`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }
}
