export namespace billingPortal {
    export namespace sessions {
        export let client: Function

        export function create(
            customer: string,
            return_url?: string,
            stripeAccount?: string,
        ): Promise<unknown> {
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
