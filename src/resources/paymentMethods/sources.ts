import qs from 'qs'

type SourcesResponse = {
    id: string
    amount: number
    currency: string
    customer: string
    metadata: object
    owner: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        email: string
        name: string
        phone: string
        verified_address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        verified_email: string
        verified_name: string
        verified_phone: string
    }
    redirect: {
        failure_reason: string
        return_url: string
        status: string
        url: string
    }
    statement_descriptor: string
    status: string
    type: string
    object: string
    client_secret: string
    code_verification: {
        attempts_remaining: number
        status: string
    }
    created: number
    flow: string
    livemode: boolean
    receiver: {
        address: string
        amount_charged: number
        amount_received: number
        amount_returned: number
        refund_attributes_method: string
        refund_attributes_status: string
    }
    source_order: {
        amount: number
        currency: string
        email: string
        items: [
            {
                amount: number
                currency: string
                description: string
                parent: string
                quantity: number
                type: string
            }
        ]
        shipping: {
            address: {
                city: string
                country: string
                line1: string
                line2: string
                postal_code: string
                state: string
            }
            carrier: string
            name: string
            phone: string
            tracking_number: string
        }
    }
    usage: string
}
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
    ): Promise<SourcesResponse> {
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
    ): Promise<SourcesResponse> {
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
    ): Promise<SourcesResponse> {
        return client(`/sources/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
