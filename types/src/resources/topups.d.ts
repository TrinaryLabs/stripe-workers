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
            status?: string
            amount?: object
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function cancel(id: string, stripeAccount?: string): Promise<unknown>
}
//# sourceMappingURL=topups.d.ts.map
