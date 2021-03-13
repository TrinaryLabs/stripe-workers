declare type FileLinksResponse = {
    id: string
    object: string
    created: number
    expires_at: number
    url: string
    file: unknown
    expired: boolean
    livemode: boolean
    metadata: object
}
export declare namespace fileLinks {
    let client: Function
    function create(
        params: {
            file: string
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<FileLinksResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<FileLinksResponse>
    function update(
        id: string,
        params: {
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<FileLinksResponse>
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [FileLinksResponse]
    }>
}
export {}
//# sourceMappingURL=fileLinks.d.ts.map
