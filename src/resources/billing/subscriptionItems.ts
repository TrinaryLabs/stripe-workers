import qs from 'qs'
import { SubscriptionItemsResponse, UsageRecordsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace subscriptionItems {
    export let client: Function

    export function create(
        params: {
            subscription: string
            metadata?: object
            price?: string
            proration_behavior?: string
            quantity?: number
            billing_thresholds?: {
                usage_gte: number
            }
            payment_behavior?: string
            price_data?: {
                currency: string
                product: string
                recurring: {
                    interval: string
                    interval_count?: number
                }
                unit_amount_decimal?: number
                unit_amount?: number
            }
            proration_date?: number
            tax_rates?: string[]
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: object
            price?: string
            proration_behavior?: string
            quantity?: number
            billing_thresholds?: {
                usage_gte: number
            }
            off_session?: boolean
            payment_behavior?: string
            price_data?: {
                currency: string
                product: string
                recurring: {
                    interval: string
                    interval_count?: number
                }
                unit_amount_decimal?: number
                unit_amount?: number
            }
            proration_date?: number
            tax_rates?: string[]
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<SubscriptionItemsResponse> {
        return client(`/subscription_items/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        params: {
            clear_usage?: boolean
            proration_date?: number
        },
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/subscription_items/${id}`, params, 'DELETE', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function list(
        params?: {
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
                headers: returnToHeaders({stripeAccount}),
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
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<UsageRecordsResponse> {
        return client(
            `/subscription_items/${id}/usage_records`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function listUsageRecordSummaries(
        id: string,
        params?: {
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
                headers: returnToHeaders({stripeAccount}),
            },
        )
    }
}
