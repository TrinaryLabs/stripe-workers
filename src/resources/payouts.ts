import qs from 'qs'

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
    ): Promise<unknown> {
        return client('/payouts', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
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
    ): Promise<unknown> {
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
    ): Promise<unknown> {
        return client(`/payouts?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
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
    ): Promise<unknown> {
        return client(`/payouts/${id}/reverse`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
