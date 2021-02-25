export declare namespace sigma {
    namespace scheduledQueryRuns {
        let client: Function;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
}
//# sourceMappingURL=scheduledQueryRuns.d.ts.map