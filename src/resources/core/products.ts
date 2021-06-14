import qs from 'qs'
import { ProductsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace products {
    export let client: Function

    export function create(
        params: {
            id?: string
            name: string
            active?: boolean
            description?: string
            metadata?: object
            attributes?: Array<string>
            caption?: string
            deactivate_on?: Array<string>
            images?: Array<string>
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
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<ProductsResponse> {
        return client('/products', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            active?: boolean
            description?: string
            metadata?: object
            name?: string
            attributes?: Array<string>
            caption?: string
            deactivate_on?: Array<string>
            images?: Array<string>
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
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
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
            ids?: Array<string>
            limit?: number
            shippable?: boolean
            starting_after?: string
            url?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ProductsResponse]
    }> {
        return client(`/products?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<ProductsResponse> {
        return client(`/products/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }
}
