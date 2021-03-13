declare type PayoutsResponse = {
    id: string
    object: string
    amount: number
    arrival_date: number
    automatic: boolean
    balance_transaction: string
    created: number
    currency: string
    description: string
    destination: string
    failure_balance_transaction: unknown
    failure_code: unknown
    failure_message: unknown
    livemode: boolean
    metadata: object
    method: string
    original_payout: unknown
    reversed_by: unknown
    source_type: string
    statement_descriptor: unknown
    status: string
    type: string
}
export declare namespace payouts {
    let client: Function
    function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
            statement_descriptor?: string
            destination?: string
            method?: string
            source_type?: string
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PayoutsResponse>
    function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse>
    function list(
        params: {
            status?: string
            arrival_date?: object
            created?: object
            destination?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PayoutsResponse]
    }>
    function cancel(
        id: string,
        stripeAccount?: string,
    ): Promise<PayoutsResponse>
    function reverse(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse>
}
export {}
//# sourceMappingURL=payouts.d.ts.map
