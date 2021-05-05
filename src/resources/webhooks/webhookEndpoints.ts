import qs from 'qs'
import { WebhookEndpointResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace webhookEndpoints {
    export let client: Function

    export function create(
        params: {
            enabled_events: string[]
            url: string
            api_version?: string
            description?: string
            metadata?: object
            connect?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<WebhookEndpointResponse> {
        return client('/webhook_endpoints', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<WebhookEndpointResponse> {
        return client(`/webhook_endpoints/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            enabled_events: string[]
            url: string
            description?: string
            metadata?: object
            disabled?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<WebhookEndpointResponse> {
        return client(`/webhook_endpoints/${id}`, params, 'POST', {
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
        data: [WebhookEndpointResponse]
    }> {
        return client(`/webhook_endpoints?${qs.stringify(params)}`, {}, 'GET', {
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
        return client(`/webhook_endpoints/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }
}
