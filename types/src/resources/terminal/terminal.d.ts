export declare namespace terminal {
    namespace connectionTokens {
        let client: Function;
        function create(params: {
            location?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
    namespace locations {
        let client: Function;
        function create(params: {
            address: object;
            display_name: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function update(id: string, params: {
            address?: object;
            display_name?: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function del(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
    namespace readers {
        let client: Function;
        function create(params: {
            registration_code?: string;
            label?: string;
            location?: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function update(id: string, params: {
            label?: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function del(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            device_type?: string;
            location?: string;
            status?: string;
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
}
//# sourceMappingURL=terminal.d.ts.map