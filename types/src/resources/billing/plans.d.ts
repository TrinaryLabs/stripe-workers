declare type PlansResponse = {
    id: string
    object: string
    active: boolean
    aggregate_usage: unknown
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: object
    nickname: unknown
    product: string
    tiers_mode: unknown
    transform_usage: unknown
    trial_period_days: unknown
    usage_type: string
}
export declare namespace plans {
    let client: Function
    function create(
        params: {
            amount?: number
            currency: string
            interval: string
            product: unknown
            active?: boolean
            metadata?: [string, unknown]
            nickname?: string
            id?: string
            tiers?: unknown
            tiers_mode?: string
            aggregate_usage?: string
            amount_decimal?: number
            billing_scheme?: string
            interval_count?: number
            transform_usage?: object
            trial_period_days?: number
            usage_type?: string
        },
        stripeAccount?: string,
    ): Promise<PlansResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PlansResponse>
    function update(
        id: string,
        params: {
            nickname?: string
            product: unknown
            active?: boolean
            metadata?: [string, unknown]
            trial_period_days?: number
        },
        stripeAccount?: string,
    ): Promise<PlansResponse>
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
            active?: boolean
            product?: string
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
        data: [PlansResponse]
    }>
}
export {}
//# sourceMappingURL=plans.d.ts.map
