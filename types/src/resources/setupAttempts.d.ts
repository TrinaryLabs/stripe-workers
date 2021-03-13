declare type SetupAttenptsResponse = {
    id: string
    object: string
    application: unknown
    created: number
    customer: unknown
    livemode: boolean
    on_behalf_of: unknown
    payment_method: string
    payment_method_details: object
    setup_error: unknown
    setup_intent: string
    status: string
    usage: string
}
export declare namespace setupAttempts {
    let client: Function
    function list(
        params: {
            setup_intent: string
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
        data: [SetupAttenptsResponse]
    }>
}
export {}
//# sourceMappingURL=setupAttempts.d.ts.map
