export declare namespace checkout {
    namespace sessions {
        let client: Function
        function create(
            params: {
                success_url: string
                cancel_url: string
                mode: string
                payment_method_types: Array<string>
                client_reference_id?: string
                customer?: any
                customer_email?: string
                line_items: Array<any>
                metadata?: [string, any]
                allow_promotion_codes?: boolean
                billing_address_collection?: unknown
                discounts?: Array<string>
                locale?: string
                payment_intent_data?: any
                setup_intent_data?: any
                shipping_address_collection?: Array<string>
                submit_type?: string
                subscription_data?: any
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function list(
            params: {
                payment_intent?: string
                subscription?: string
                limit?: number
                ending_before?: string
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function listLineItems(
            id: string,
            params: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
}
//# sourceMappingURL=sessions.d.ts.map
