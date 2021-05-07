import qs from 'qs'
import { PricesResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace prices {
    export let client: Function

    export function create(
        params: {
            currency: string
            product?: string
            unit_amount?: number
            active?: boolean
            metadata?: object
            nickname?: string
            recurring?: {
                interval: string
                aggregate_usage?: string
                interval_count?: number
                usage_type?: string
            }
            product_data?: {
                name: string
                active?: boolean
                metadata?: object
                statement_descriptor?: string
                unit_label?: string
            }
            tiers?: {
                up_to: string
                flat_amount?: number
                flat_amount_decimal?: number
                unit_amount?: number
                unit_amount_decimal?: number
            }
            tiers_mode?: string
            billing_scheme?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
            transform_quantity?: {
                divide_by: number
                round: string
            }
            unit_amount_decimal?: number
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PricesResponse> {
        return client('/prices', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<PricesResponse> {
        return client(`/prices/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            active?: boolean
            metadata?: object
            nickname?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<PricesResponse> {
        return client(`/prices/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            active?: boolean
            currency?: string
            product?: string
            type?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            starting_after?: string
            lookup_keys?: string[]
            recurring?: {
                interval?: string
                usage_type?: string
            }
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PricesResponse]
    }> {
        return client(`/prices?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
