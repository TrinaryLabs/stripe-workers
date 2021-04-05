import qs from 'qs'

type EventRetrieveResponse = {
    id: string
    object: string
    api_version: string
    created: number
    data: {
        object: object
        previous_attributes: object
    }
    expires_at: number
    url: string
    file: unknown
    expired: boolean
    livemode: boolean
    pending_webhooks: number
    request: object
    type: string
}

export namespace events {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<EventRetrieveResponse> {
        return client(`/events/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            types?: string[]
            created?: object
            delivery_success?: unknown
            ending_before?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [EventRetrieveResponse]
    }> {
        return client(`/events?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
