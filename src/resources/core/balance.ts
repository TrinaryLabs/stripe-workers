import { BalanceResponse } from '../../types'

export namespace balance {
    export let client: Function

    export function retrieve(
        stripeAccount?: string,
    ): Promise<BalanceResponse> {
        return client('/balance', {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
