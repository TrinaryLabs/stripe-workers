declare type DisputesResponse = {
    id: string
    object: string
    amount: number
    balance_transactions: [unknown]
    charge: string
    created: number
    currency: string
    evidence: object
    evidende_details: object
    is_charge_refundable: boolean
    livemode: boolean
    metadata: object
    payment_intent: string
    reason: string
    status: string
}
declare type DisputesListResponse = {
    object: string
    url: string
    has_more: boolean
    data: [object]
}
export declare namespace disputes {
    let client: Function
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<DisputesResponse>
    function update(
        id: string,
        params: {
            evidence?: object
            metadata?: [string, unknown]
            submit?: boolean
        },
        stripeAccount?: string,
    ): Promise<DisputesResponse>
    function close(
        id: string,
        stripeAccount?: string,
    ): Promise<DisputesResponse>
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
    ): Promise<DisputesListResponse>
}
export {}
//# sourceMappingURL=disputes.d.ts.map
