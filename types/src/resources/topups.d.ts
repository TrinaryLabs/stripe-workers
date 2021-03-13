declare type TopUpsResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: unknown
    created: number
    currency: string
    description: string
    expected_availability_date: number
    failure_code: unknown
    failure_message: unknown
    livemode: boolean
    metadata: object
    source: object
    statement_descriptor: string | unknown
    status: string
    transfer_group: unknown
}
export declare namespace topups {
    let client: Function
    function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
            source?: unknown
            statement_descriptor?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<TopUpsResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TopUpsResponse>
    function update(
        id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<TopUpsResponse>
    function list(
        params: {
            status?: string
            amount?: object
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
        data: [TopUpsResponse]
    }>
    function cancel(id: string, stripeAccount?: string): Promise<TopUpsResponse>
}
export {}
//# sourceMappingURL=topups.d.ts.map
