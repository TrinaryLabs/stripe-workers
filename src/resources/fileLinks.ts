import qs from 'qs'

type FileLinksResponse = {
    id: string,
    object: string,
    created: number,
    expires_at: number,
    url: string,
    file: unknown
    expired: boolean,
    livemode: boolean,
    metadata: object
}

export namespace fileLinks {
    export let client: Function

    export function create(
        params: {
            file: string
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<FileLinksResponse> {
        return client(`/file_links`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<FileLinksResponse> {
        return client(`/file_links/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            expires_at?: object
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<FileLinksResponse> {
        return client(`/file_links/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            created?: object
            ending_before?: string
            expired?: boolean
            file?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string,
        url: string,
        has_more: boolean,
        data: [
          object
        ]
      }> {
        return client(`/file_links?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
