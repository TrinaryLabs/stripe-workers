export declare namespace reviews {
    let client: Function;
    function approve(id: string, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        created?: object;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=reviews.d.ts.map