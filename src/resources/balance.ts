export namespace balance {
    export let client: Function

    export function retrieve(stripeAccount?: string): Promise<unknown> {
        return client(
            '/balance',
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
