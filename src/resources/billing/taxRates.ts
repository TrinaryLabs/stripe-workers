import qs from 'qs'
import { TaxRatesResponse } from '../../types'

export namespace taxRates {
    export let client: Function

    export function create(
        params: {
            display_name: string
            inclusive: boolean
            percentage: number
            active?: boolean
            country?: string
            description?: string
            jurisdiction?: string
            metadata?: [string, unknown]
            state?: string
        },
        stripeAccount?: string,
    ): Promise<TaxRatesResponse> {
        return client('/tax_rates', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TaxRatesResponse> {
        return client(`/tax_rates/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            display_name: string
            active?: boolean
            country?: string
            description?: string
            jurisdiction?: string
            metadata?: [string, unknown]
            state?: string
        },
        stripeAccount?: string,
    ): Promise<TaxRatesResponse> {
        return client(`/tax_rates/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            active?: boolean
            created?: string
            ending_before?: string
            inclusive?: boolean
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TaxRatesResponse]
    }> {
        return client(`/tax_rates?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
