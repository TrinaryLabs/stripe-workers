import qs from 'qs'
import { FilesResponse } from '../../types'

export namespace files {
    export let client: Function

    export function create(
        params: {
            file: any
            purpose: string
            file_link_data?: {
                create: boolean
                expires_at?: number
                metadata?: object
            }
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
        params?: {
            purpose?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
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
