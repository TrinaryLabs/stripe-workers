import qs from 'qs'

export namespace files {
    export let client: Function

    export function create(
        params: {
            file: unknown
            purpose: string
            file_link_data?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client('/files', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            host: 'https://files.stripe.com/v1',
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/files/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            host: 'https://files.stripe.com/v1',
        })
    }

    export function list(
        params: {
            purpose?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/files?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            host: 'https://files.stripe.com/v1',
        })
    }
}
