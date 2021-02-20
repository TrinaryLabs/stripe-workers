export declare namespace products {
    let client: Function;
    function create(params: {
        id?: string;
        name: string;
        active?: boolean;
        description?: string;
        metadata?: [string, unknown];
        attributes?: string[];
        caption?: string;
        deactivate_on?: string[];
        images?: string[];
        package_dimensions?: object;
        shippable?: boolean;
        statement_descriptor?: string;
        unit_label?: string;
        url?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        active?: boolean;
        description?: string;
        metadata?: [string, unknown];
        name?: string;
        attributes?: string[];
        caption?: string;
        deactivate_on?: string[];
        images?: string[];
        package_dimensions?: object;
        shippable?: boolean;
        statement_descriptor?: string;
        unit_label?: string;
        url?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        active?: boolean;
        created?: object;
        ending_before?: string;
        ids?: string[];
        limit?: number;
        shippable?: boolean;
        starting_after?: string;
        url?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function del(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=products.d.ts.map