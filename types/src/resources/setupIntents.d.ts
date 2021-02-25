export declare namespace setupIntents {
    let client: Function;
    function create(params: {
        confirm?: boolean;
        customer?: string;
        description?: string;
        metadata?: [string, unknown];
        payment_method?: string;
        payment_method_types?: string[];
        usage?: string;
        mandate_data?: unknown;
        on_behalf_of?: unknown;
        payment_method_options?: unknown;
        return_url?: string;
        single_use?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, params: {
        client_secret?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        customer?: string;
        description?: string;
        metadata?: [string, unknown];
        payment_method?: string;
        payment_method_types?: string[];
        payment_method_options?: unknown;
    }, stripeAccount?: string): Promise<unknown>;
    function confirm(id: string, params: {
        payment_method?: unknown;
        mandate_data?: object;
        payment_method_options?: object;
        return_url?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function cancel(id: string, params: {
        cancellation_reason?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        customer?: string;
        payment_method?: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=setupIntents.d.ts.map