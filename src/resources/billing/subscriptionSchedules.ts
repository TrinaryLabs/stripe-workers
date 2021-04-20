import qs from 'qs'
import { SubscriptionSchedulesResponse } from '../../types'
export namespace subscriptionSchedules {
    export let client: Function

    export function create(
        params: {
            customer?: string
            metadata?: object
            phases?: object[]
            start_date?: number
            dafault_settings?: object
            end_behavior?: unknown
            from_subscriptions?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            customer?: string
            metadata?: object
            phases?: object[]
            dafault_settings?: object
            end_behavior?: unknown
            proration_behavior?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_items/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        params: {
            invoice_now?: unknown
            prorate?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/cancel`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function release(
        id: string,
        params: {
            preserve_cancel_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/release`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SubscriptionSchedulesResponse]
    }> {
        return client(
            `/subscription_schedules?${qs.stringify(params)}`,
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
