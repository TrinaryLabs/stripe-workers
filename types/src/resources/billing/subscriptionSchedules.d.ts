export declare namespace subscriptionSchedules {
    let client: Function
    function create(
        params: {
            customer?: string
            metadata?: [string, unknown]
            phases?: object[]
            start_date?: number
            dafault_settings?: object
            end_behavior?: unknown
            from_subscriptions?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            customer?: string
            metadata?: [string, unknown]
            phases?: object[]
            dafault_settings?: object
            end_behavior?: unknown
            proration_behavior?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function cancel(
        id: string,
        params: {
            invoice_now?: unknown
            prorate?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function release(
        id: string,
        params: {
            preserve_cancel_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            customer?: string
            canceled_at?: object
            completed_at?: object
            created?: object
            ending_before?: unknown
            limit?: number
            released_at?: object
            scheduled?: unknown
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=subscriptionSchedules.d.ts.map
