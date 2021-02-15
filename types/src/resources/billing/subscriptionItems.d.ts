export declare namespace subscriptionItems {
    let client: Function;
    function create(params: {
        subscription: string;
        metadata?: [string, unknown];
        price?: string;
        proration_behavior?: unknown;
        quantity?: number;
        billing_thresholds?: object;
        payment_behavior?: string;
        price_data?: object;
        proration_date?: number;
        tax_rates?: string[];
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        metadata?: [string, unknown];
        price?: string;
        proration_behavior?: unknown;
        quantity?: number;
        billing_thresholds?: object;
        off_session?: unknown;
        payment_behavior?: string;
        price_data?: object;
        proration_date?: number;
        tax_rates?: string[];
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, params: {
        clear_usage?: unknown;
        proration_date?: unknown;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        subscription?: string;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function createUsageRecord(id: string, params: {
        quantity: number;
        timestmap: number;
        action?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function listUsageRecordSummaries(id: string, params: {
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=subscriptionItems.d.ts.map