export declare namespace setupAttempts {
    let client: Function;
    function list(params: {
        setup_intent: string;
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=setupAttempts.d.ts.map