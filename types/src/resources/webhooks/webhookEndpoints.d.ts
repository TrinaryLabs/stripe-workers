export declare namespace webhookEndpoints {
    let client: Function;
    function create(params: {
        enabled_events: string[];
        url: string;
        api_version?: string;
        description?: string;
        metadata?: [string, unknown];
        connect?: boolean;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        enabled_events: string[];
        url: string;
        description?: string;
        metadata?: [string, unknown];
        disabled?: boolean;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=webhookEndpoints.d.ts.map