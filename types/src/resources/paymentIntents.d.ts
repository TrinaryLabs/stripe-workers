export declare namespace paymentIntents {
    let client: Function
    function create(
        params: {
            amount: number
            currency: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function update(
        id: string,
        params: {
            amount?: number
            currency?: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function confirm(
        id: string,
        params: {
            payment_method?: unknown
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            error_on_requires_action?: unknown
            mandate?: string
            mandate_data?: object
            off_session?: unknown
            payment_method_data?: object
            payment_method_options?: object
            payment_method_types?: string[]
            return_url?: string
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function capture(
        id: string,
        params: {
            amount_to_capture?: number
            application_fee_amount?: number
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            transfer_data?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            customer?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=paymentIntents.d.ts.map
