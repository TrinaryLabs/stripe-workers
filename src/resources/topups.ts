import qs from 'qs'

type TopUpsResponse = {
    id: string,
    object: string,
    amount: number,
    balance_transaction: unknown,
    created: number,
    currency: string,
    description: string,
    expected_availability_date: number,
    failure_code: unknown,
    failure_message: unknown,
    livemode: boolean,
    metadata: object,
    source: object,
    statement_descriptor: string | unknown,
    status: string,
    transfer_group: unknown
}
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
    ): Promise<TopUpsResponse> {
        return client('/topups', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}`, {}, 'GET', {
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
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
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
    ): Promise<{
        object: string,
        url: string,
        has_more: boolean,
        data: [TopUpsResponse]
      }> {
        return client(`/topups?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        stripeAccount?: string,
    ): Promise<TopUpsResponse> {
        return client(`/topups/${id}/cancel`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
