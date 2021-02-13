export declare namespace applicationFees {
    let client: Function;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        limit?: number;
        created?: object;
        ending_before?: string;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function createRefund(id: string, params: {
        amount?: number;
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function retrieveRefund(fee_id: string, refund_id: string, stripeAccount?: string): Promise<unknown>;
    function updateRefund(fee_id: string, refund_id: string, params: {
        metadata?: [string, unknown];
    }, stripeAccount?: string): Promise<unknown>;
    function listRefunds(id: string, params: {
        limit?: number;
        ending_before?: string;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=applicationFees.d.ts.map