export declare namespace orderReturns {
    let client: Function
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function list(
        params: {
            order?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=orderReturns.d.ts.map
