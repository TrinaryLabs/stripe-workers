export declare namespace fileLinks {
    let client: Function
    function create(
        params: {
            file: string
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            created?: object
            ending_before?: string
            expired?: boolean
            file?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=fileLinks.d.ts.map
