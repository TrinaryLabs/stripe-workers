export declare namespace customers {
    let client: Function;
    function create(params: {
        adress?: object;
        description?: string;
        metadata?: [string, unknown];
        name?: string;
        payment_method?: string;
        phone?: string;
        shipping?: object;
        balance?: number;
        coupon?: unknown;
        invoice_prefix?: string;
        invoice_settings?: object;
        next_invoice_sequence?: unknown;
        preferred_locales?: unknown;
        promotion_code?: string;
        source?: unknown;
        tax_exempt?: string;
        tax_id_data?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        adress?: object;
        description?: string;
        metadata?: [string, unknown];
        name?: string;
        payment_method?: string;
        phone?: string;
        shipping?: object;
        balance?: number;
        coupon?: unknown;
        invoice_prefix?: string;
        invoice_settings?: object;
        next_invoice_sequence?: unknown;
        preferred_locales?: unknown;
        promotion_code?: string;
        source?: unknown;
        tax_exempt?: string;
    }, stripeAccount: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        email?: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=customers.d.ts.map