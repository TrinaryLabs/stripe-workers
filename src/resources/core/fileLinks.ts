import qs from 'qs'
import { FileLinksResponse } from '../../types'

export namespace fileLinks {
    export let client: Function

    export function create(
        params: {
            file: string
            expires_at?: object
            metadata?: object
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
            metadata?: object
        },
        stripeAccount?: string,
    ): Promise<FileLinksResponse> {
        return client(`/file_links/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
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
        object: string
        url: string
        has_more: boolean
        data: [FileLinksResponse]
    }> {
        return client(`/file_links?${qs.stringify(params)}`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
