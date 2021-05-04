import { BalanceResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace balance {
    export let client: Function

    export function retrieve(stripeAccount?: string): Promise<BalanceResponse> {
        return client('/balance', {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }
}
