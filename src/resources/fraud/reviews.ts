import qs from 'qs'

export namespace reviews {
    export let client: Function

    export function approve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/reviews/${id}/approve`,
            {},
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/reviews/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/reviews?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
