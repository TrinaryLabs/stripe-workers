export declare namespace mandates {
    let client: Function
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        customer_acceptance: object
        livemode: boolean
        multi_use: object
        payment_method: string
        payment_method_details: object
        status: string
        type: string
    }>
}
//# sourceMappingURL=mandates.d.ts.map
