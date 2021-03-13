declare type PricesResponse = {
    id: string
    object: string
    active: boolean
    billing_scheme: string
    created: number
    currency: string
    livemode: boolean
    lookup_key: unknown
    metadata: object
    nickname: unknown
    product: string
    recurring: object
    tiers_mode: unknown
    transform_quantity: unknown
    type: string
    unit_amount: number
    unit_amount_decimal: string
}
export declare namespace prices {
    let client: Function
    function create(
        params: {
            currency: string
            product?: string
            unit_amount?: number
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            recurring?: object
            product_data?: object
            tiers?: object
            tiers_mode?: string
            billing_scheme?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
            transform_quantity?: object
            unit_amount_decimal?: number
        },
        stripeAccount?: string,
    ): Promise<PricesResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PricesResponse>
    function update(
        id: string,
        params: {
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            lookup_key?: string
            transfer_lookup_key?: boolean
        },
        stripeAccount?: string,
    ): Promise<PricesResponse>
    function list(
        params: {
            active?: boolean
            currency?: string
            product?: string
            type?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
            lookup_keys?: string[]
            recurring?: object
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PricesResponse]
    }>
}
export {}
//# sourceMappingURL=prices.d.ts.map
