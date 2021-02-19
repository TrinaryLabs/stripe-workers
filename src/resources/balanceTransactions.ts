import qs from 'qs'

export namespace balanceTransactions {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/balance_transactions/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            payout?: string,
            type?: string,
            available_on?: object,
            created?: object,
            currency?: string,
            ending_before?: string,
            limit?: number,
            source?: unknown,
            starting_after?: string 
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/balance_transactions?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
