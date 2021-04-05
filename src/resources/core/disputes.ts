import qs from 'qs'

type DisputesResponse = {
    id: string
    object: string
    amount: number
    balance_transactions: [object]
    charge: string
    created: number
    currency: string
    evidence: object
    evidende_details: {
        due_by: number
        has_evidence: boolean
        post_due: boolean
        submission_count: number
    }
    is_charge_refundable: boolean
    livemode: boolean
    metadata: object
    payment_intent: string
    reason: string
    status: string
}
export namespace disputes {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            evidence?: object
            metadata?: [string, unknown]
            submit?: boolean
        },
        stripeAccount?: string,
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function close(
        id: string,
        stripeAccount?: string,
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}/close`, {}, 'POST', {
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
        data: [DisputesResponse]
    }> {
        return client(`/disputes?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
