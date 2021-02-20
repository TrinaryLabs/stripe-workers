import qs from 'qs'

export namespace refunds {
    export let client: Function

    export function create(
        params: {
            charge?: string
            amount?: number
            metadata?: [string, unknown]
            payment_intent?: string
            reason?: unknown // string or null,
            refund_application_fee?: boolean
            reverse_transfer?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/refunds',
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
            `/refunds/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/refunds/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
            `/refunds?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
