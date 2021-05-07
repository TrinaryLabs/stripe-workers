import qs from 'qs'
import { LocationsResponse, ReadersResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace terminal {
    export let client: Function
    export namespace connectionTokens {
        export function create(
            params?: {
                location?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<{
            object: string
            secret: string
        }> {
            return client('/terminal/connection_tokens', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }
    }

    export namespace locations {
        export function create(
            params: {
                address: {
                    country: string
                    line1: string
                    city?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                display_name: string
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<LocationsResponse> {
            return client('/terminal/locations', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { stripeAccount?: string },
        ): Promise<LocationsResponse> {
            return client(`/terminal/locations/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                address?: {
                    country?: string
                    line1?: string
                    city?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                display_name?: string
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<LocationsResponse> {
            return client(`/terminal/locations/${id}`, params, 'POST', {
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
            return client(`/terminal/locations/${id}`, {}, 'DELETE', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: { stripeAccount?: string },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [LocationsResponse]
        }> {
            return client(
                `/terminal/locations?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }

    export namespace readers {
        export function create(
            params: {
                registration_code?: string
                label?: string
                location?: string
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<ReadersResponse> {
            return client('/terminal/readers', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { stripeAccount?: string },
        ): Promise<ReadersResponse> {
            return client(`/terminal/readers/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                label?: string
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<ReadersResponse> {
            return client(`/terminal/readers/${id}`, params, 'POST', {
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
            return client(`/terminal/readers/${id}`, {}, 'DELETE', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                device_type?: string
                location?: string
                status?: string
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: { stripeAccount?: string },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReadersResponse]
        }> {
            return client(
                `/terminal/readers?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
}
