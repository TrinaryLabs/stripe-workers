import qs from 'qs'

type ReviewsResponse = {
    id: string
    object: string
    billing_zip: unknown
    charge: string
    closed_reason: unknown
    created: number
    ip_address: unknown
    ip_address_location: unknown
    livemode: boolean
    open: boolean
    opened_reason: string
    reason: string
    session: unknown
}

export namespace reviews {
    export let client: Function

    export function approve(
        id: string,
        stripeAccount?: string,
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}/approve`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ReviewsResponse> {
        return client(`/reviews/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
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
        data: [ReviewsResponse]
    }> {
        return client(`/reviews?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
