import qs from 'qs'

export namespace topups {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
            source?: unknown
            statement_descriptor?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/topups',
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/topups/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/topups/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            status?: string
            amount?: object
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/topups?${qs.stringify(params)}`,
            params,
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function cancel(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/topups/${id}/cancel`,
            {},
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
