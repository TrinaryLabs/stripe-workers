declare type WebhookEndpointResponse = {
    id: string
    object: string
    api_version: unknown
    application: unknown
    created: number
    description: string
    enabled_events: [string]
    livemode: boolean
    metadata: object
    status: string
    url: string
    secret: string
}
export declare namespace webhookEndpoints {
    let client: Function
    function create(
        params: {
            enabled_events: string[]
            url: string
            api_version?: string
            description?: string
            metadata?: [string, unknown]
            connect?: boolean
        },
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse>
    function update(
        id: string,
        params: {
            enabled_events: string[]
            url: string
            description?: string
            metadata?: [string, unknown]
            disabled?: boolean
        },
        stripeAccount?: string,
    ): Promise<WebhookEndpointResponse>
    function list(
        params: {
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
    }>
    function del(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }>
}
export {}
//# sourceMappingURL=webhookEndpoints.d.ts.map
