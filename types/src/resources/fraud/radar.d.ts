export declare namespace radar {
    namespace earlyFraudWarnings {
        let client: Function;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            charge?: string;
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
    namespace valueList {
        let client: Function;
        function create(params: {
            alias: string;
            name: string;
            item_type?: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function update(id: string, params: {
            alias?: string;
            name?: string;
            metadata?: [string, unknown];
        }, stripeAccount?: string): Promise<unknown>;
        function del(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            alias?: string;
            contains?: string;
            created?: object;
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
    namespace valueListItems {
        let client: Function;
        function create(params: {
            value: string;
            value_list: string;
        }, stripeAccount?: string): Promise<unknown>;
        function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
        function del(id: string, stripeAccount?: string): Promise<unknown>;
        function list(params: {
            value_list: string;
            value?: string;
            created?: object;
            ending_before?: string;
            limit?: number;
            starting_after?: string;
        }, stripeAccount?: string): Promise<unknown>;
    }
}
//# sourceMappingURL=radar.d.ts.map