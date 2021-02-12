export declare namespace accounts {
    let client: Function;
    function create(params: {
        type: string;
        country?: string;
        email: string;
        capabilities?: object;
        business_type?: string;
        company?: object;
        individual?: object;
        metadata?: [string, unknown];
        tos_acceptance?: object;
        account_token?: unknown;
        business_profile?: object;
        default_currency?: string;
        documents?: object;
        external_account?: object;
        settings?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        type: string;
        country?: string;
        email: string;
        capabilities?: object;
        business_type?: string;
        company?: object;
        individual?: object;
        metadata?: [string, unknown];
        tos_acceptance?: object;
        account_token?: unknown;
        business_profile?: object;
        default_currency?: string;
        documents?: object;
        external_account?: object;
        settings?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
    function reject(id: string, params: {
        reason: string;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        created?: unknown;
        limit?: number;
        ending_before?: string;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function createLoginLink(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=accounts.d.ts.map