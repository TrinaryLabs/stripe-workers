export declare namespace refunds {
    let client: Function;
    function create(params: {
        charge?: string;
        amount?: number;
        metadata?: [string, unknown];
        payment_intent?: string;
        reason?: unknown;
        refund_application_fee?: boolean;
        reverse_transfer?: boolean;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        charge?: string;
        payment_intent?: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=refunds.d.ts.map