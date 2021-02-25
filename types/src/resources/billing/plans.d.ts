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
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
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
    ): Promise<unknown>
    function del(id: string, stripeAccount?: string): Promise<unknown>
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
    ): Promise<unknown>
}
//# sourceMappingURL=plans.d.ts.map
