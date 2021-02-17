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
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
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
    ): Promise<unknown>
    function createReversal(
        id: string,
        params: {
            amount: number
            description?: string
            metadata?: [string, unknown]
            refund_application_fee?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveReversal(
        id: string,
        rever_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updateReversal(
        id: string,
        rever_id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function listReversals(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=transfers.d.ts.map
