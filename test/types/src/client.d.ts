export declare class HTTPClient {
    private STRIPE_SECRET_KEY;
    private Fetch;
    constructor(key: string, customFetch?: Function);
    request: (path: string, body: any, method: string, headers?: object | undefined) => Promise<any>;
}
//# sourceMappingURL=client.d.ts.map