export declare class HTTPClient {
    private STRIPE_SECRET_KEY
    private API_VERSION
    private UA
    private FETCH
    constructor(
        key: string,
        apiVersion?: string,
        userAgent?: string,
        customFetch?: Function,
    )
    request: (
        path: string,
        body: any,
        method: string,
        params?:
            | {
                  headers?: object | undefined
                  host?: string | undefined
              }
            | undefined,
    ) => Promise<unknown>
}
//# sourceMappingURL=client.d.ts.map
