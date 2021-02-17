export declare namespace issuing {
    namespace authorizations {
        let client: Function
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function update(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function approve(
            id: string,
            params: {
                amount?: number
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function decline(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function list(
            params: {
                card?: string
                cardholder?: string
                status?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
    namespace cardholders {
        let client: Function
        function create(
            params: {
                billing: object
                name: string
                type: string
                email?: string
                metadata?: [string, unknown]
                phone_number?: string
                company?: object
                individual?: object
                spending_controls?: object
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function update(
            id: string,
            params: {
                billing: object
                email?: string
                metadata?: [string, unknown]
                phone_number?: string
                company?: object
                individual?: object
                spending_controls?: object
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function list(
            params: {
                created?: object
                email?: string
                ending_before?: string
                limit?: number
                phone_number?: string
                starting_after?: string
                status?: string
                type?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
    namespace cards {
        let client: Function
        function create(
            params: {
                cardholder: string
                currency: string
                type: string
                metadata?: [string, unknown]
                status?: string
                replacement_for?: unknown
                replacement_reason?: string
                shipping?: object
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function update(
            id: string,
            params: {
                cancellation_reason?: string
                metadata?: [string, unknown]
                status?: string
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function list(
            params: {
                cardholder?: string
                type?: string
                created?: object
                ending_before?: string
                exp_month?: number
                exp_year?: number
                last4?: number
                limit?: number
                starting_after?: string
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
    namespace disputes {
        let client: Function
        function create(
            params: {
                transaction: string
                evidence?: object
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function submit(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function update(
            id: string,
            params: {
                evidence?: object
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function list(
            params: {
                transaction?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
    namespace transactions {
        let client: Function
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>
        function update(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown>
        function list(
            params: {
                card?: string
                cardholder?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
                type?: string
            },
            stripeAccount?: string,
        ): Promise<unknown>
    }
}
//# sourceMappingURL=issuing.d.ts.map
