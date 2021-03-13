declare type FilesResponse = {
    id: string
    object: string
    created: number
    expires_at: number
    filename: string
    links: object
    purpose: string
    size: number
    title: string | undefined
    type: string
    url: string
    file: unknown
}
export declare namespace files {
    let client: Function
    function create(
        params: {
            file: unknown
            purpose: string
            file_link_data?: object
        },
        stripeAccount?: string,
    ): Promise<FilesResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<FilesResponse>
    function list(
        params: {
            purpose?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [FilesResponse]
    }>
}
export {}
//# sourceMappingURL=files.d.ts.map
