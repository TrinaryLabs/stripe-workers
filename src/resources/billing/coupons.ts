import qs from 'qs'

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
    ): Promise<unknown> {
        return client(
            '/coupons',
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            name?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/coupons/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function del(id: string, stripeAccount?: string): Promise<unknown> {
        return client(
            `/coupons/${id}`,
            {},
            'DELETE',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            created?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/coupons?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
