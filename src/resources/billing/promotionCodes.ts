import qs from 'qs'

export namespace promotionCodes {
    export let client: Function

    export function create(
        params: {
            coupon: string
            code?: string
            metadata?: [string, unknown]
            active?: boolean
            customer?: string
            expires_at?: number
            max_redemptions?: string
            restrictions?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/promotion_codes',
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            active?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/promotion_codes/${id}`,
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
            `/promotion_codes/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            active?: boolean
            code?: string
            coupon?: string
            customer?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/promotion_codes?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
