export declare namespace taxRates {
    let client: Function
    function create(
        params: {
            display_name: string
            inclusive: boolean
            percentage: number
            active?: boolean
            country?: string
            description?: string
            jurisdiction?: string
            metadata?: [string, unknown]
            state?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            display_name: string
            active?: boolean
            country?: string
            description?: string
            jurisdiction?: string
            metadata?: [string, unknown]
            state?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            active?: boolean
            created?: string
            ending_before?: string
            inclusive?: boolean
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=taxRates.d.ts.map
