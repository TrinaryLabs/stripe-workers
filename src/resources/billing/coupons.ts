import qs from 'qs'

type CouponsResponse = {
    id: string
    object: string
    amount_off: number
    created: number
    currency: string
    duration: string
    duration_in_months: number
    livemode: boolean
    max_redemptions: number
    metadata: object
    name: string
    percent_off: number
    redeem_by: number
    times_redeemed: number
    valid: boolean
}

export namespace coupons {
    export let client: Function

    export function create(
        params: {
            duration: string
            amount_off?: number
            currency?: string
            duration_in_months?: number
            metadata?: [string, unknown]
            name?: string
            percent_off?: number
            id?: string
            applies_to?: object
            max_redemtions?: number
            redeem_by?: number
        },
        stripeAccount?: string,
    ): Promise<CouponsResponse> {
        return client('/coupons', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CouponsResponse> {
        return client(`/coupons/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            name?: string
        },
        stripeAccount?: string,
    ): Promise<CouponsResponse> {
        return client(`/coupons/${id}`, params, 'POST', {
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
        return client(`/coupons/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            created?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CouponsResponse]
    }> {
        return client(`/coupons?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
