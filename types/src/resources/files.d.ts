export declare namespace files {
    let client: Function
    function create(
        params: {
            file: unknown
            purpose: string
            file_link_data?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function list(
        params: {
            purpose?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=files.d.ts.map
