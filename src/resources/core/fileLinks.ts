import qs from 'qs'
import { FileLinksResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace fileLinks {
    export let client: Function

    export function create(
        params: {
            file: string
            expires_at?: number
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<FileLinksResponse> {
        return client(
            `/file_links?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<FileLinksResponse> {
        return client(
            `/file_links/${id}?${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            expires_at?: number
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<FileLinksResponse> {
        return client(
            `/file_links/${id}?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function list(
        params?: {
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            expired?: boolean
            file?: string
            limit?: number
            starting_after?: string
            type?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [FileLinksResponse]
    }> {
        return client(
            `/file_links?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
