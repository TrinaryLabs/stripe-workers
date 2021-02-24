import qs from 'qs'

export namespace subscriptionSchedules {
    export let client: Function

    export function create(
        params: {
            customer?: string
            metadata?: [string, unknown]
            phases?: object[]
            start_date?: number
            dafault_settings?: object
            end_behavior?: unknown
            from_subscriptions?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_schedules`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_schedules/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            customer?: string
            metadata?: [string, unknown]
            phases?: object[]
            dafault_settings?: object
            end_behavior?: unknown
            proration_behavior?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_items/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function cancel(
        id: string,
        params: {
            invoice_now?: unknown
            prorate?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_schedules/${id}/cancel`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function release(
        id: string,
        params: {
            preserve_cancel_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_schedules/${id}/release`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            customer?: string
            canceled_at?: object
            completed_at?: object
            created?: object
            ending_before?: unknown
            limit?: number
            released_at?: object
            scheduled?: unknown
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/subscription_schedules?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
