import qs from 'qs'
import { BalanceTransactionsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace balanceTransactions {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<BalanceTransactionsResponse> {
        return client(
            `/balance_transactions/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
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
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [BalanceTransactionsResponse]
    }> {
        return client(
            `/balance_transactions?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
