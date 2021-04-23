import qs from 'qs'
import { ProductsResponse } from '../../types'

export namespace products {
    export let client: Function

    export function create(
        params: {
            id?: string
            name: string
            active?: boolean
            description?: string
            metadata?: object
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<ProductsResponse> {
        return client('/products', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            active?: boolean
            description?: string
            metadata?: object
            name?: string
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            active?: boolean
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            ids?: string[]
            limit?: number
            shippable?: boolean
            starting_after?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ProductsResponse]
    }> {
        return client(`/products?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function del(
        id: string,
        stripeAccount?: string,
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
