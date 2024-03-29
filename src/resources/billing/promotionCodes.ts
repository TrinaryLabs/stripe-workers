import qs from 'qs'
import { PromotionCodesResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace promotionCodes {
    export let client: Function

    export function create(
        params: {
            coupon: string
            code?: string
            metadata?: object
            active?: boolean
            customer?: string
            expires_at?: number
            max_redemptions?: string
            restrictions?: {
                first_time_transaction?: boolean
                minimum_amount?: number
                minimum_amount_currency?: string
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PromotionCodesResponse> {
        return client(
            `/promotion_codes?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: object
            active?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<PromotionCodesResponse> {
        return client(
            `/promotion_codes/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<PromotionCodesResponse> {
        return client(
            `/promotion_codes/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function list(
        params?: {
            active?: boolean
            code?: string
            coupon?: string
            customer?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PromotionCodesResponse]
    }> {
        return client(
            `/promotion_codes?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
