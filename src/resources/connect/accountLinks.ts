export namespace accountLinks {
    export let client: Function

    export function create(
        params: {
            account: string
            refresh_url: string
            return_url: string
            type: string
            collect?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/account_links',
            params,
            'POST',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }
}
