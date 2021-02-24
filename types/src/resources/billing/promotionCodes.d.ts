export declare namespace promotionCodes {
    let client: Function
    function create(
        params: {
            coupon: string
            code?: string
            metadata?: [string, unknown]
            active?: boolean
            customer?: string
            expires_at?: number
            max_redemptions?: string
            restrictions?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            active?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function list(
        params: {
            active?: boolean
            code?: string
            coupon?: string
            customer?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=promotionCodes.d.ts.map
