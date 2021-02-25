export declare namespace charges {
    let client: Function
    function create(
        params: {
            amount: number
            currency: string
            customer?: string
            description?: string
            metadata?: [string, unknown]
            receipt_email?: string
            shipping?: object
            source?: unknown
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture?: unknown
            on_behalf_of?: unknown
            transfer_data?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: [string, unknown]
            receipt_email?: string
            shipping?: object
            fraud_details?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function capture(
        id: string,
        params: {
            amount?: number
            receipt_email?: string
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            transfer_data?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            customer?: string
            created?: object
            ending_before?: string
            limit?: number
            payment_intent?: unknown
            starting_after?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=charges.d.ts.map
