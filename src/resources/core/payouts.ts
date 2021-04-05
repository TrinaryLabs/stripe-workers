import qs from 'qs'

type PayoutsResponse = {
    id: string
    amount: number
    arrival_date: number
    currency: string
    description: string
    metadata: object
    statement_descriptor: string
    status: string
    object: string
    automatic: boolean
    balance_transaction: string
    created: number
    destination: string
    failure_balance_transaction: string
    failure_code: string
    failure_message: string
    livemode: boolean
    method: string
    original_payout: string
    reversed_by: string
    source_type: string
    type: string
}

export namespace payouts {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
            statement_descriptor?: string
            destination?: string
            method?: string
            source_type?: string
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse> {
        return client('/payouts', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            status?: string
            arrival_date?: object
            created?: object
            destination?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PayoutsResponse]
    }> {
        return client(`/payouts?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        stripeAccount?: string,
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}/cancel`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function reverse(
        id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<PayoutsResponse> {
        return client(`/payouts/${id}/reverse`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
