declare type ProductsResponse = {
    id: string
    object: string
    active: boolean
    created: number
    description: unknown
    images: []
    livemode: boolean
    metadata: object
    name: string
    statement_descriptor: unknown
    unit_label: unknown
    updated: number
}
export declare namespace products {
    let client: Function
    function create(
        params: {
            id?: string
            name: string
            active?: boolean
            description?: string
            metadata?: [string, unknown]
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: object
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<ProductsResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ProductsResponse>
    function update(
        id: string,
        params: {
            active?: boolean
            description?: string
            metadata?: [string, unknown]
            name?: string
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: object
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<ProductsResponse>
    function list(
        params: {
            active?: boolean
            created?: object
            ending_before?: string
            ids?: string[]
            limit?: number
            shippable?: boolean
            starting_after?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ProductsResponse]
    }>
    function del(id: string, stripeAccount?: string): Promise<ProductsResponse>
}
export {}
//# sourceMappingURL=products.d.ts.map
