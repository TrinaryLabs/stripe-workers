export declare namespace orders {
    let client: Function;
    function create(params: {
        currency: string;
        customer?: string;
        email?: string;
        items?: object;
        metadata?: [string, unknown];
        shipping?: object;
        coupon?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        metadata?: [string, unknown];
        shipping?: object;
        status?: string;
        coupon?: string;
        selected_shipping_method?: unknown;
    }, stripeAccount?: string): Promise<unknown>;
    function pay(id: string, params: {
        customer: string;
        source: unknown;
        email?: string;
        metadata?: [string, unknown];
        application_fee?: number;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        customer?: string;
        status?: string;
        created?: number;
        ending_before?: string;
        ids?: string[];
        limit?: number;
        starting_after?: string;
        status_transitions?: object;
        upstream_ids?: string[];
    }, stripeAccount?: string): Promise<unknown>;
    function returnOrder(id: string, params: {
        items?: object;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=orders.d.ts.map