declare type SetupIntentsResponse = {
    id: string
    object: string
    application: unknown
    cancellation_reason: unknown
    client_secret: string
    created: number
    customer: string
    description: unknown
    last_setup_error: unknown
    latest_attempt: unknown
    livemode: boolean
    mandate: unknown
    metadata: object
    next_action: unknown
    on_behalf_of: unknown
    payment_method: unknown
    payment_method_options: object
    payment_method_types: [string]
    single_use_mandate: unknown
    status: string
    usage: string
}
export declare namespace setupIntents {
    let client: Function
    function create(
        params: {
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            payment_method?: string
            payment_method_types?: string[]
            usage?: string
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_options?: unknown
            return_url?: string
            single_use?: object
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse>
    function retrieve(
        id: string,
        params: {
            client_secret?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse>
    function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: [string, unknown]
            payment_method?: string
            payment_method_types?: string[]
            payment_method_options?: unknown
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse>
    function confirm(
        id: string,
        params: {
            payment_method?: unknown
            mandate_data?: object
            payment_method_options?: object
            return_url?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse>
    function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        stripeAccount?: string,
    ): Promise<SetupIntentsResponse>
    function list(
        params: {
            customer?: string
            payment_method?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SetupIntentsResponse]
    }>
}
export {}
//# sourceMappingURL=setupIntents.d.ts.map
