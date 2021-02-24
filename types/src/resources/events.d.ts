export declare namespace events {
    let client: Function
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function list(
        params: {
            types?: string[]
            created?: object
            delivery_success?: unknown
            ending_before?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=events.d.ts.map
