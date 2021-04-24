import qs from 'qs'
import { PlansResponse } from '../../types'

export namespace plans {
    export let client: Function

    export function create(
        params: {
            amount?: number
            currency: string
            interval: string
            product: {
                name: string
                active?: boolean
                metadata?: object
                statement_descriptor?: string
                unit_label?: string
            } | string
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
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            nickname?: string
            product: {
                name: string
                active?: boolean
                metadata?: object
                statement_descriptor?: string
                unit_label?: string
            } | string
            active?: boolean
            metadata?: object
            trial_period_days?: number
        },
        stripeAccount?: string,
    ): Promise<PlansResponse> {
        return client(`/plans/${id}`, params, 'POST', {
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
        return client(`/plans/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PlansResponse]
    }> {
        return client(`/plans?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
