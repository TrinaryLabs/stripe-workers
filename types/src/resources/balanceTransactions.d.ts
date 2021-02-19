export declare namespace balanceTransactions {
    let client: Function;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        payout?: string;
        type?: string;
        available_on?: object;
        created?: object;
        currency?: string;
        ending_before?: string;
        limit?: number;
        source?: unknown;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=balanceTransactions.d.ts.map