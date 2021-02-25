import qs from 'qs'

export namespace transfers {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            destination: string
            description?: string
            metadata?: [string, unknown]
            source_transaction?: unknown
            source_type?: unknown
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/transfers`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/transfers/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/transfers/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            destination?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/topups?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createReversal(
        id: string,
        params: {
            amount: number
            description?: string
            metadata?: [string, unknown]
            refund_application_fee?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/transfers/${id}/reversals`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveReversal(
        id: string,
        rever_id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/transfers/${id}/reversals/${rever_id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function updateReversal(
        id: string,
        rever_id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/transfers/${id}/reversals/${rever_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listReversals(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/transfer/${id}/reversals?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
