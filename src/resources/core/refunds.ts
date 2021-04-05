import qs from 'qs'

type RefundsResponse = {
    id: string
    amount: number
    charge: string
    currency: string
    description: string
    metadata: object
    payment_intent: string
    reason: string
    status: string
    object: string
    balance_transaction: string
    created: number
    failure_balance_transaction: string
    failure_reason: string
    receipt_number: string
    source_transfer_reversal: string
    transfer_reversal: string
}
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
    ): Promise<RefundsResponse> {
        return client('/refunds', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<RefundsResponse> {
        return client(`/refunds/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<RefundsResponse> {
        return client(`/refunds/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [RefundsResponse]
    }> {
        return client(`/refunds?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
