export declare namespace subscriptions {
    let client: Function;
    function create(params: {
        customer: string;
        items: object;
        cancel_at_period_end?: boolean;
        default_payment_method?: unknown;
        metadata?: [string, unknown];
        add_invoice_items?: string[];
        application_fee_percent?: string;
        backdate_start_date?: unknown;
        billing_cycle_anchor?: unknown;
        billing_thresholds?: object;
        cancel_at?: unknown;
        collection_method?: unknown;
        coupon?: string;
        days_until_due?: number;
        default_source?: unknown;
        default_tax_rates?: string;
        off_session?: unknown;
        payment_behavior?: string;
        pending_invoice_item_inteval?: object;
        promotion_code?: string;
        proration_behavior?: unknown;
        transfer_data?: object;
        trial_end?: number;
        trial_from_plan?: boolean;
        trial_period_days?: number;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        items: object;
        cancel_at_period_end?: boolean;
        metadata?: [string, unknown];
        add_invoice_items?: string[];
        application_fee_percent?: string;
        proration_behavior?: string;
        billing_cycle_anchor?: string;
        billing_thresholds?: object;
        cancel_at?: number;
        collection_method?: unknown;
        coupon?: string;
        days_until_due?: number;
        default_source?: unknown;
        dafault_tax_rates?: string;
        off_session?: unknown;
        pause_collection?: unknown;
        payment_behavior?: string;
        pending_invoice_item_interval?: object;
        promotion_code?: string;
        proration_date?: unknown;
        transfer_data?: object;
        trial_end?: number;
        trial_from_plan?: unknown;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, params: {
        invoice_now?: unknown;
        prorate?: unknown;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        customer?: string;
        price?: string;
        status?: string;
        collection_method?: unknown;
        created?: object;
        current_period_end?: object;
        current_period_start?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function deleteDiscount(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=subscriptions.d.ts.map