export declare namespace payouts {
    let client: Function;
    function create(params: {
        amount: number;
        currency: string;
        description?: string;
        metadata?: [string, unknown];
        statement_descriptor?: string;
        destination?: string;
        method?: string;
        source_type?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        status?: string;
        arrival_date?: object;
        created?: object;
        destination?: string;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function cancel(id: string, stripeAccount?: string): Promise<unknown>;
    function reverse(id: string, params: {
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=payouts.d.ts.map