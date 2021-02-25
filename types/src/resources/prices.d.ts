export declare namespace prices {
    let client: Function;
    function create(params: {
        currency: string;
        product?: string;
        unit_amount?: number;
        active?: boolean;
        metadata?: [string, unknown];
        nickname?: string;
        recurring?: object;
        product_data?: object;
        tiers?: object;
        tiers_mode?: string;
        billing_scheme?: string;
        lookup_key?: string;
        transfer_lookup_key?: boolean;
        transform_quantity?: object;
        unit_amount_decimal?: number;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        active?: boolean;
        metadata?: [string, unknown];
        nickname?: string;
        lookup_key?: string;
        transfer_lookup_key?: boolean;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        active?: boolean;
        currency?: string;
        product?: string;
        type?: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
        lookup_keys?: string[];
        recurring?: object;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=prices.d.ts.map