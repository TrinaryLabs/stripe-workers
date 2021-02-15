export declare namespace invoiceItems {
    let client: Function;
    function create(params: {
        customer: string;
        currency?: string;
        amount?: number;
        description?: string;
        metadata?: [string, unknown];
        period?: object;
        price?: string;
        discountable?: boolean;
        discounts?: string[];
        invoice?: string;
        price_data?: object;
        quantity?: number;
        tax_rates?: string;
        unit_amount?: number;
        unit_amount_decimal?: number;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        amount?: number;
        description?: string;
        metadata?: [string, unknown];
        period?: object;
        price?: string;
        discountable?: boolean;
        discounts?: string[];
        price_data?: object;
        quantity?: number;
        tax_rates?: string;
        unit_amount?: number;
        unit_amount_decimal?: number;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        customer?: string;
        created?: number;
        ending_before?: string;
        invoice?: string;
        limit?: number;
        pending?: boolean;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=invoiceItems.d.ts.map