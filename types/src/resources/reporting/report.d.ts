export declare namespace reporting {
    namespace reportRuns {
        let client: Function;
        function create(params: {
            report_type: string;
            parameters?: object;
        }, stripeAccount?: string): Promise<unknown>;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            created?: object;
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
    namespace reportTypes {
        let client: Function;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function list(stripeAccount?: string): Promise<unknown>;
    }
}
//# sourceMappingURL=report.d.ts.map