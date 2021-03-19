declare type CouponsResponse = {
    id: string
    object: string
    amount_off: unknown
    created: number
    currency: string
    duration: string
    duration_in_months: number
    livemode: boolean
    max_redemptions: unknown
    metadata: object
    name: string
    percent_off: number
    redeem_by: unknown
    times_redeemed: number
    valid: boolean
}
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
    ): Promise<CouponsResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CouponsResponse>
    function update(
        id: string,
        params: {
            metadata?: [string, unknown]
            name?: string
        },
        stripeAccount?: string,
    ): Promise<CouponsResponse>
    function del(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }>
    function list(
        params: {
            created?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CouponsResponse]
    }>
}
export {}
//# sourceMappingURL=coupons.d.ts.map
