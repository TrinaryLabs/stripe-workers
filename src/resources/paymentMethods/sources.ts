import qs from 'qs'

export namespace sources {
    export let client: Function

    export function create(
        params: {
            type: string
            amount?: number
            currency?: string
            metadata?: [string, unknown]
            owner?: object
            redirect?: object
            statement_descriptor?: string
            flow?: string
            mandate?: object
            receiver?: object
            source_order?: object
            token?: string
            usage?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client('/sources', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret: string // how should we use this????
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/sources/${id}?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            amount?: number
            metadata?: [string, unknown]
            owner?: object
            mandate?: object
            source_order?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(`/sources/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
