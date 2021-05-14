import qs from 'qs'
import { PlansResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace plans {
    export let client: Function

    export function create(
        params: {
            amount?: number
            currency: string
            interval: string
            product:
                | {
                      name: string
                      active?: boolean
                      metadata?: object
                      statement_descriptor?: string
                      unit_label?: string
                  }
                | string
            active?: boolean
            metadata?: object
            nickname?: string
            id?: string
            tiers?: {
                up_to: number
                flat_amount?: number
                flat_amount_decimal?: number
                unit_amount?: number
                unit_amount_decimal?: number
            }
            tiers_mode?: string
            aggregate_usage?: string
            amount_decimal?: number
            billing_scheme?: string
            interval_count?: number
            transform_usage?: {
                divide_by: number
                round: string
            }
            trial_period_days?: number
            usage_type?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<PlansResponse> {
        return client(`/plans?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<PlansResponse> {
        return client(`/plans/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            nickname?: string
            product:
                | {
                      name: string
                      active?: boolean
                      metadata?: object
                      statement_descriptor?: string
                      unit_label?: string
                  }
                | string
            active?: boolean
            metadata?: object
            trial_period_days?: number
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<PlansResponse> {
        return client(`/plans/${id}?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/plans/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            active?: boolean
            product?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PlansResponse]
    }> {
        return client(`/plans?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
