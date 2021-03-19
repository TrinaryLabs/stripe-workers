declare type BillingPortalResponse = {
    id: string
    object: string
    configuration: string
    created: number
    customer: string
    livemode: boolean
    on_behalf_of: unknown
    return_url: string
    url: string
}
export declare namespace billingPortal {
    namespace sessions {
        let client: Function
        function create(
            customer: string,
            return_url?: string,
            stripeAccount?: string,
        ): Promise<BillingPortalResponse>
    }
}
export {}
//# sourceMappingURL=billingPortal.d.ts.map
