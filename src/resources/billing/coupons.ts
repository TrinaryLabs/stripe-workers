import qs from 'qs'
import { CouponsResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace coupons {
    export let client: Function

    export function create(
        params: {
            duration: string
            amount_off?: number
            currency?: string
            duration_in_months?: number
            metadata?: object
            name?: string
            percent_off?: number
            id?: string
            applies_to?: {
                products: [string]
            }
            max_redemtions?: number
            redeem_by?: number
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CouponsResponse> {
        return client(
            `/coupons?${qs.stringify({ expand: settings?.expand })}`,
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
    ): Promise<CouponsResponse> {
        return client(
            `/coupons/${id}?${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: object
            name?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CouponsResponse> {
        return client(
            `/coupons/${id}?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/coupons/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            created?: string
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
        data: [CouponsResponse]
    }> {
        return client(
            `/coupons?${qs.stringify(params)}&${qs.stringify({
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
