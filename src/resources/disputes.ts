import qs from 'qs'

export namespace disputes {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/disputes/${id}`,
            {},
            'GET',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function update(
        id: string,
        params: {
            evidence?: object
            metadata?: [string, unknown]
            submit?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/disputes/${id}`,
            params,
            'POST',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function close(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/disputes/${id}/close`,
            {},
            'POST',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function list(
        params: {
            charge?: string
            payment_intent?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/disputes?${qs.stringify(params)}`,
            params,
            'GET',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }
}
