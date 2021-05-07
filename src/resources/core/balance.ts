import { BalanceResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace balance {
    export let client: Function

    export function retrieve(settings?: {
        stripeAccount?: string
    }): Promise<BalanceResponse> {
        return client('/balance', {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
