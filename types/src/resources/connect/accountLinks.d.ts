export declare namespace accountLinks {
    let client: Function
    function create(
        params: {
            account: string
            refresh_url: string
            return_url: string
            type: string
            collect?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        created: number
        expires_at: number
        url: string
    }>
}
//# sourceMappingURL=accountLinks.d.ts.map
