import qs from 'qs'

type OrdersResponse = {
    id: string
    amount: number
    charge: string
    currency: string
    customer: string
    email: string
    items: [
        {
            object: string
            amount: number
            currency: string
            description: string
            parent: string
            quantity: number
            type: string
        }
    ]
    metadata: object
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    status: string
    object: string
    amount_returned: number
    application: string
    application_fee: number
    created: number
    external_coupon_code: string
    livemode: boolean
    returns: {
        object: string
        data: [
            {
                id: string
                object: string
                amount: number
                created: number
                currency: string
                items: [
                    {
                        object: string
                        amount: number
                        currency: string
                        description: string
                        parent: string
                        quantity: number
                        type: string
                    }
                ]
                livemode: boolean
                order: string
                refund: string
            }
        ]
        has_more: boolean
        url: string
    }
    selected_shipping_method: string
    shipping_methods: [
        {
            id: string
            amount: number
            currency: string
            delivery_estimate: {
                date: string
                earliest: string
                latest: string
                type: string
            }
            description: string
        }
    ]
    status_transitions: {
        canceled: number
        fulfiled: number
        paid: number
        returned: number
    }
    updated: number
    upstream_id: string
}

export namespace orders {
    export let client: Function

    export function create(
        params: {
            currency: string
            customer?: string
            email?: string
            items?: object
            metadata?: [string, unknown]
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
            metadata?: [string, unknown]
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
            customer: string
            source: unknown
            email?: string
            metadata?: [string, unknown]
            application_fee?: number
        },
        stripeAccount?: string,
    ): Promise<OrdersResponse> {
        return client(`/orders/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
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
