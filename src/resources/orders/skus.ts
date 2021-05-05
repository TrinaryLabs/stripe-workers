import qs from 'qs'
import { SKUResponse } from '../../types'
import { returnToHeaders } from '../../util'

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
            attributes?: object
            image?: string
            metadata?: object
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SKUResponse> {
        return client('/skus', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<SKUResponse> {
        return client(`/skus/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
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
            attributes?: object
            image?: string
            metadata?: object
            package_dimensions?: {
                height: number
                length: number
                weight: number
                width: number
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SKUResponse> {
        return client(`/skus/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            active?: boolean
            product?: string
            attributes?: object
            ending_before?: string
            ids?: string[]
            in_stock?: boolean
            limit?: number
            starting_after?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SKUResponse]
    }> {
        return client(`/skus?${qs.stringify(params)}`, {}, 'GET', {
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
        return client(`/skus/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }
}
