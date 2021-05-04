import qs from 'qs'
import { SetupAttenptsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace setupAttempts {
    export let client: Function

    export function list(
        params: {
            setup_intent: string
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
        data: [SetupAttenptsResponse]
    }> {
        return client(`/setup_attempts?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }
}
