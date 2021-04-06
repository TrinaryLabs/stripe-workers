import qs from 'qs'

type TransfersResponse = {
    id: string
    object: string
    amount: number
    amount_reversed: number
    balance_transaction: string
    created: number
    currency: string
    description: string
    destination: string
    destination_payment: string
    livemode: boolean
    metadata: object
    reversals: object
    reversed: boolean
    source_transaction: string
    source_type: string
    transfer_group: string
}

type TransfersReversalResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: string
    created: number
    currency: string
    destination_payment_refund: string
    metadata: object
    source_refund: string
    transfer: string
}

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
    ): Promise<TransfersResponse> {
        return client(`/transfers`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TransfersResponse> {
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
    ): Promise<TransfersResponse> {
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TransfersResponse]
    }> {
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
    ): Promise<TransfersReversalResponse> {
        return client(`/transfers/${id}/reversals`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveReversal(
        id: string,
        rever_id: string,
        stripeAccount?: string,
    ): Promise<TransfersReversalResponse> {
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
    ): Promise<TransfersReversalResponse> {
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TransfersReversalResponse]
    }> {
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
