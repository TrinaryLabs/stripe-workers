export declare namespace coupons {
    let client: Function
    function create(
        params: {
            duration: string
            amount_off?: number
            currency?: string
            duration_in_months?: number
            metadata?: [string, unknown]
            name?: string
            percent_off?: number
            id?: string
            applies_to?: object
            max_redemtions?: number
            redeem_by?: number
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            name?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function del(id: string, stripeAccount?: string): Promise<unknown>
    function list(
        params: {
            created?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=coupons.d.ts.map
