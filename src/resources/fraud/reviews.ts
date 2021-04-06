import qs from 'qs'

type ReviewsResponse = {
    id: string
    object: string
    billing_zip: string
    charge: string
    closed_reason: string
    created: number
    ip_address: string
    ip_address_location: {
        city: string
        country: string
        latitude: number
        longitude: number
        region: string
    }
    livemode: boolean
    open: boolean
    opened_reason: string
    reason: string
    session: {
        browser: string
        device: string
        platform: string
        version: string
    }
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
