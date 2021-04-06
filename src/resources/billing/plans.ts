import qs from 'qs'

type PlansResponse = {
    id: string
    object: string
    active: boolean
    aggregate_usage: string
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: object
    nickname: string
    product: string
    tiers_mode: [
        {
            flat_amount: number
            flat_amount_decimal: string
            unit_amount: number
            unit_amount_decimal: string
            up_to: number
        }
    ]
    transform_usage: {
        divide_by: number
        round: string
    }
    trial_period_days: number
    usage_type: string
}

export namespace plans {
    export let client: Function

    export function create(
        params: {
            amount?: number
            currency: string
            interval: string
            product: unknown // string or object
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            id?: string
            tiers?: unknown
            tiers_mode?: string
            aggregate_usage?: string
            amount_decimal?: number
            billing_scheme?: string
            interval_count?: number
            transform_usage?: object
            trial_period_days?: number
            usage_type?: string
        },
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            nickname?: string
            product: unknown // string or object
            active?: boolean
            metadata?: [string, unknown]
            trial_period_days?: number
        },
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function del(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/plans/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            active?: boolean
            product?: string
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
        data: [PlansResponse]
    }> {
        return client(`/plans?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
