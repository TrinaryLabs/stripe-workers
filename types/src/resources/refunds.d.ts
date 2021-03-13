declare type RefundsResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: unknown
    charge: string
    created: number
    currency: string
    metadata: object
    payment_intent: unknown
    reason: unknown
    receipt_number: unknown
    source_transfer_reversal: unknown
    status: string
    transfer_reversal: unknown
}
export declare namespace refunds {
    let client: Function
    function create(
        params: {
            charge?: string
            amount?: number
            metadata?: [string, unknown]
            payment_intent?: string
            reason?: unknown
            refund_application_fee?: boolean
            reverse_transfer?: boolean
        },
        stripeAccount?: string,
    ): Promise<RefundsResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<RefundsResponse>
    function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<RefundsResponse>
    function list(
        params: {
            charge?: string
            payment_intent?: string
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
        data: [RefundsResponse]
    }>
}
export {}
//# sourceMappingURL=refunds.d.ts.map
