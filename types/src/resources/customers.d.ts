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
    function createSource(cus_id: string, params: {
        source: unknown;
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function retrieveSource(cus_id: string, id: string, stripeAccount?: string): Promise<unknown>;
    function updateSource(cus_id: string, id: string, params: {
        amounts?: number[];
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        exp_month?: number;
        exp_year?: number;
        name?: string;
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function verifySource(cus_id: string, ba_id: string, params: {
        account_holder_name?: string;
        account_holder_type?: string;
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function deleteSource(cus_id: string, id: string, stripeAccount?: string): Promise<unknown>;
    function listSource(cus_id: string, params: {
        object: string;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=customers.d.ts.map