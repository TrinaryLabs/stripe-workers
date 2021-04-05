import qs from 'qs'

type FilesResponse = {
    id: string
    purpose: string
    type: string
    object: string
    created: number
    expires_at: number
    filename: string
    links: {
        object: string
        has_more: boolean
        url: string
        data: [
            {
                id: string
                object: string
                created: number
                expired: boolean
                expires_at: number
                file: string
                livemode: boolean
                metadata: object
                url: string
            }
        ]
    }
    size: number
    title: string | undefined
    url: string
}

export namespace files {
    export let client: Function

    export function create(
        params: {
            file: unknown
            purpose: string
            file_link_data?: object
        },
        stripeAccount?: string,
    ): Promise<FilesResponse> {
        return client('/files', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            host: 'https://files.stripe.com/v1',
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<FilesResponse> {
        return client(`/files/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [FilesResponse]
    }> {
        return client(`/files?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
