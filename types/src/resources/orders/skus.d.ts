export declare namespace skus {
    let client: Function;
    function create(params: {
        id?: string;
        currency: string;
        inventory: object;
        price: number;
        product: string;
        active?: boolean;
        attributes?: object;
        image?: string;
        metadata?: [string, unknown];
        package_dimensions?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        currency: string;
        inventory: object;
        price: number;
        product: string;
        active?: boolean;
        attributes?: object;
        image?: string;
        metadata?: [string, unknown];
        package_dimensions?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        active?: boolean;
        product?: string;
        attributes?: object;
        ending_before?: string;
        ids?: string[];
        in_stock?: boolean;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=skus.d.ts.map