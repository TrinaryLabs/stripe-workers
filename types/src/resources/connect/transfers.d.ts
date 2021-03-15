declare type TransfersResponse = {
    id: string
    object: string
    amount: number
    amount_reversed: number
    balance_transaction: string
    created: number
    currency: string
    description: unknown
    destination: string
    destination_payment: string
    livemode: boolean
    metadata: object
    reversals: object
    reversed: boolean
    source_transaction: unknown
    source_type: string
    transfer_group: string
}
declare type TransfersReversalResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: unknown
    created: number
    currency: string
    destination_payment_refund: unknown
    metadata: object
    source_refund: unknown
    transfer: string
}
export declare namespace transfers {
    let client: Function
    function create(
        params: {
            amount: number
            currency: string
            destination: string
            description?: string
            metadata?: [string, unknown]
            source_transaction?: unknown
            source_type?: unknown
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<TransfersResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TransfersResponse>
    function update(
        id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<TransfersResponse>
    function list(
        params: {
            destination?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TransfersResponse]
    }>
    function createReversal(
        id: string,
        params: {
            amount: number
            description?: string
            metadata?: [string, unknown]
            refund_application_fee?: boolean
        },
        stripeAccount?: string,
    ): Promise<TransfersReversalResponse>
    function retrieveReversal(
        id: string,
        rever_id: string,
        stripeAccount?: string,
    ): Promise<TransfersReversalResponse>
    function updateReversal(
        id: string,
        rever_id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<TransfersReversalResponse>
    function listReversals(
        id: string,
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
        data: [TransfersReversalResponse]
    }>
}
export {}
//# sourceMappingURL=transfers.d.ts.map
