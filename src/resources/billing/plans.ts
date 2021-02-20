import qs from 'qs'

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
    ): Promise<unknown> {
        return client(
            `/plans`,
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
            `/plans/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
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
    ): Promise<unknown> {
        return client(
            `/plans/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function del(id: string, stripeAccount?: string): Promise<unknown> {
        return client(
            `/plans/${id}`,
            {},
            'DELETE',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
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
    ): Promise<unknown> {
        return client(
            `/plans?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
