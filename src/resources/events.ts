import qs from 'qs'

type EventRetrieveResponse = {
    id: string,
    object: string,
    api_version: string,
    created: number,
    data: object,
    expires_at: number,
    url: string,
    file: unknown
    expired: boolean,
    livemode: boolean,
    pending_webhooks: number,
    request: object,
    type: string
}

type EventListResponse = {
    object: string,
    url: string,
    has_more: boolean,
    data: [object]
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
    ): Promise<EventListResponse> {
        return client(`/events?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
