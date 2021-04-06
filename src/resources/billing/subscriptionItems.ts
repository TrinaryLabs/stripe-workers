import qs from 'qs'

type SubscriptionItemsResponse = {
    id: string
    object: string
    billing_thresholds: {
        usage_gte: number
    }
    created: number
    metadata: object
    price: {
        id: string
        object: string
        active: boolean
        billing_scheme: string
        created: number
        currency: string
        livemode: boolean
        lookup_key: string
        metadata: object
        nickname: string
        product: string
        recurring: {
            aggregate_usage: string
            interval: string
            interval_count: number
            usage_type: string
        }
        tiers: [
            {
                flat_amount: number
                flat_amount_decimal: string
                unit_amount: number
                unit_amount_decimal: string
                up_to: number
            }
        ]
        tiers_mode: string
        transform_quantity: {
            divide_by: number
            round: string
        }
        type: string
        unit_amount: number
        unit_amount_decimal: string
    }
    quantity: number
    subscription: string
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        }
    ]
}

type UsageRecordsResponse = {
    id: string
    object: string
    livemode: boolean
    quantity: number
    subscription_item: string
    timestamp: number
}

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
