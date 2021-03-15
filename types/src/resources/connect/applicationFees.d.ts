declare type ApplicationFeesResponse = {
    id: string
    object: string
    account: string
    amount: number
    amount_refunded: number
    application: string
    balance_transaction: string
    charge: string
    created: number
    currency: string
    livemode: boolean
    originating_transaction: unknown
    refunded: boolean
    refunds: object
}
declare type ApplicationFeesRefundResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: unknown
    created: number
    currency: string
    fee: string
    metadata: object
}
export declare namespace applicationFees {
    let client: Function
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesResponse>
    function list(
        params: {
            limit?: number
            created?: object
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesResponse]
    }>
    function createRefund(
        id: string,
        params: {
            amount?: number
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse>
    function retrieveRefund(
        fee_id: string,
        refund_id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse>
    function updateRefund(
        fee_id: string,
        refund_id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse>
    function listRefunds(
        id: string,
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesRefundResponse]
    }>
}
export {}
//# sourceMappingURL=applicationFees.d.ts.map
