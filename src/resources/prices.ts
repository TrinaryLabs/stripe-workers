import qs from 'qs'

export namespace prices {
    export let client: Function

    export function create(
        params: {
            currency: string
            product?: string
            unit_amount?: number
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            recurring?: object
            product_data?: object
            tiers?: object
            tiers_mode?: string
            billing_scheme?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
            transform_quantity?: object
            unit_amount_decimal?: number
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client('/prices', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/prices/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/prices/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            active?: boolean
            currency?: string
            product?: string
            type?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
            lookup_keys?: string[]
            recurring?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/prices?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
