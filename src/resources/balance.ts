export namespace balance {
    export let client: Function

    export function retrieve(
        stripeAccount?: string,
    ): Promise<{
        object: string
        available: [unknown]
        connect_reserved: [unknown]
        livemode: boolean
        pending: [unknown]
    }> {
        return client('/balance', {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
