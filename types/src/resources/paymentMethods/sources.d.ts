export declare namespace sources {
    let client: Function;
    function create(params: {
        type: string;
        amount?: number;
        currency?: string;
        metadata?: [string, unknown];
        owner?: object;
        redirect?: object;
        statement_descriptor?: string;
        flow?: string;
        mandate?: object;
        receiver?: object;
        source_order?: object;
        token?: string;
        usage?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, params: {
        client_secret: string;
    }, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        amount?: number;
        metadata?: [string, unknown];
        owner?: object;
        mandate?: object;
        source_order?: object;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=sources.d.ts.map