export declare namespace accountLinks {
    let client: Function;
    function create(params: {
        account: string;
        refresh_url: string;
        return_url: string;
        type: string;
        collect?: string;
    }, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=accountLinks.d.ts.map