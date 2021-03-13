declare type EventRetrieveResponse = {
    id: string
    object: string
    api_version: string
    created: number
    data: object
    expires_at: number
    url: string
    file: unknown
    expired: boolean
    livemode: boolean
    pending_webhooks: number
    request: object
    type: string
}
declare type EventListResponse = {
    object: string
    url: string
    has_more: boolean
    data: [object]
}
export declare namespace events {
    let client: Function
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<EventRetrieveResponse>
    function list(
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
    ): Promise<EventListResponse>
}
export {}
//# sourceMappingURL=events.d.ts.map
