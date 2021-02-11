export declare class HTTPClient {
    STRIPE_SECRET_KEY: string;
    FETCH: Function;
    constructor(key: string, customFetch?: Function);
    request: (path: string, body: any, method: string, headers?: object | undefined) => Promise<unknown>;
}
//# sourceMappingURL=client.d.ts.map