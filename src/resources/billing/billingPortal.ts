type BillingPortalResponse = {
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
export namespace billingPortal {
    export namespace sessions {
        export let client: Function

        export function create(
            customer: string,
            return_url?: string,
            stripeAccount?: string,
        ): Promise<BillingPortalResponse> {
            return client(
                '/billing_portal/sessions',
                { customer, return_url },
                'POST',
                {
                    headers: stripeAccount
                        ? { 'Stripe-Account': stripeAccount }
                        : {},
                },
            )
        }
    }
}
