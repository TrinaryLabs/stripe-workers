export namespace orderReturns {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/order_returns/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            order?: string,
            created?: object,
            ending_before?: string,
            limit?: number,
            starting_after?: string,
        }, stripeAccount?: string,
    ): Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/order_returns?`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        ) */
    }

}