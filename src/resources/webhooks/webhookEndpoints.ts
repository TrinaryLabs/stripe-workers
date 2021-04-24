import qs from 'qs'
import { WebhookEndpointResponse } from '../../types'

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
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse> {
        return client('/webhook_endpoints', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse> {
        return client(`/webhook_endpoints/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse> {
        return client(`/webhook_endpoints/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [WebhookEndpointResponse]
    }> {
        return client(`/webhook_endpoints?${qs.stringify(params)}`, {}, 'GET', {
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
        return client(`/webhook_endpoints/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
