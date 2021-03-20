import qs from 'qs'

type PromotionCodesResponse = {
    id: string,
    object: string,
    active: boolean,
    code: string,
    coupon: string | object,
    created: number,
    customer: unknown,
    expires_at: unknown,
    livemode: boolean,
    max_redemptions: unknown,
    metadata: object,
    restrictions: object
    times_redeemed: number
}

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
    ): Promise<PromotionCodesResponse> {
        return client('/promotion_codes', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            active?: boolean
        },
        stripeAccount?: string,
    ): Promise<PromotionCodesResponse> {
        return client(`/promotion_codes/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PromotionCodesResponse> {
        return client(`/promotion_codes/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
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
    ): Promise<{
        object: string,
        url: string,
        has_more: boolean,
        data: [PromotionCodesResponse]
    }> {
        return client(`/promotion_codes?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
