export declare namespace balance {
    let client: Function
    function retrieve(
        stripeAccount?: string,
    ): Promise<{
        object: string
        available: [unknown]
        connect_reserved: [unknown]
        livemode: boolean
        pending: [unknown]
    }>
}
//# sourceMappingURL=balance.d.ts.map
