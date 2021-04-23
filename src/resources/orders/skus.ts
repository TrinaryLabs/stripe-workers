import qs from 'qs'
import { SKUResponse } from '../../types'

export namespace skus {
    export let client: Function

    export function create(
        params: {
            id?: string
            currency: string
            inventory: {
                type: string
                quantity?: number
                value?: string
            }
            price: number
            product: string
            active?: boolean
            attributes?: unknown
            image?: string
            metadata?: object
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
        },
        stripeAccount?: string,
    ): Promise<SKUResponse> {
        return client('/skus', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SKUResponse> {
        return client(`/skus/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            currency?: string
            inventory?: {
                type: string
                quantity?: number
                value?: string
            }
            price?: number
            product?: string
            active?: boolean
            attributes?: unknown
            image?: string
            metadata?: object
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
        },
        stripeAccount?: string,
    ): Promise<SKUResponse> {
        return client(`/skus/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            active?: boolean
            product?: string
            attributes?: unknown
            ending_before?: string
            ids?: string[]
            in_stock?: boolean
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SKUResponse]
    }> {
        return client(`/skus?${qs.stringify(params)}`, {}, 'GET', {
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
        return client(`/skus/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
