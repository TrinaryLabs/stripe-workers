import { AccountLinksResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace accountLinks {
    export let client: Function

    export function create(
        params: {
            account: string
            refresh_url: string
            return_url: string
            type: string
            collect?: string
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<AccountLinksResponse> {
        return client('/account_links', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }
}
