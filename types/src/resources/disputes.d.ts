export declare namespace disputes {
    let client: Function;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        evidence?: object;
        metadata?: [string, unknown];
        submit?: boolean;
    }, stripeAccount?: string): Promise<unknown>;
    function close(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        charge?: string;
        payment_intent?: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=disputes.d.ts.map