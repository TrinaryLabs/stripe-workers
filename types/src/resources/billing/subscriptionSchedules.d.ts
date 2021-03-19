declare type SubscriptionSchedulesResponse = {
    id: string
    object: string
    canceled_at: number
    completed_at: unknown
    created: number
    current_phase: unknown
    customer: string
    default_settings: object
    end_behavior: string
    livemode: boolean
    metadata: object
    phases: [object]
    released_at: unknown
    released_subscription: unknown
    status: string
    subscription: string
}
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
    ): Promise<SubscriptionSchedulesResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse>
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
    ): Promise<SubscriptionSchedulesResponse>
    function cancel(
        id: string,
        params: {
            invoice_now?: unknown
            prorate?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse>
    function release(
        id: string,
        params: {
            preserve_cancel_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse>
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SubscriptionSchedulesResponse]
    }>
}
export {}
//# sourceMappingURL=subscriptionSchedules.d.ts.map
