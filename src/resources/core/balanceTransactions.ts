import qs from 'qs'
import { BalanceTransactionsResponse } from '../../types'

export namespace balanceTransactions {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<BalanceTransactionsResponse> {
        return client(`/balance_transactions/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            payout?: string
            type?: string
            available_on?:
                | {
                      gt: string
                      gte: string
                      lt: string
                      lte: string
                  }
                | string
            created?:
                | {
                      gt: string
                      gte: string
                      lt: string
                      lte: string
                  }
                | string
            currency?: string
            ending_before?: string
            limit?: number
            source?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [BalanceTransactionsResponse]
    }> {
        return client(
            `/balance_transactions?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
