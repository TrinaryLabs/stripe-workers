import qs from 'qs'

export namespace setupAttempts {
    export let client: Function

    export function list(
        params: {
            setup_intent: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/setup_attempts?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }
}
