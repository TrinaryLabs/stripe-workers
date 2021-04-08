import qs from 'qs'
import { SubscriptionItemsResponse, UsageRecordsResponse } from '../../types'

export namespace subscriptionItems {
    export let client: Function

    export function create(
        params: {
            subscription: string
            metadata?: [string, unknown]
            price?: string
            proration_behavior?: unknown
            quantity?: number
            billing_thresholds?: object
            payment_behavior?: string
            price_data?: object
            proration_date?: number
            tax_rates?: string[]
        },
        stripeAccount?: string,
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            price?: string
            proration_behavior?: unknown
            quantity?: number
            billing_thresholds?: object
            off_session?: unknown
            payment_behavior?: string
            price_data?: object
            proration_date?: number
            tax_rates?: string[]
        },
        stripeAccount?: string,
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function del(
        id: string,
        params: {
            clear_usage?: unknown
            proration_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/subscription_items/${id}`, params, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            subscription?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SubscriptionItemsResponse]
    }> {
        return client(
            `/subscription_items?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function createUsageRecord(
        id: string,
        params: {
            quantity: number
            timestmap: number
            action?: string
        },
        stripeAccount?: string,
    ): Promise<UsageRecordsResponse> {
        return client(
            `/subscription_items/${id}/usage_records`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listUsageRecordSummaries(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [UsageRecordsResponse]
    }> {
        return client(
            `/subscription_items/${id}/usage_record_summaries?${qs.stringify(
                params,
            )}`,
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
