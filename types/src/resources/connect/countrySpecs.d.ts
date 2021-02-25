export declare namespace countrySpecs {
    let client: Function
    function list(
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
}
//# sourceMappingURL=countrySpecs.d.ts.map
