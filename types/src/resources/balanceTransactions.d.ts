declare type BalanceTransactionsResponse = {
    id: string
    object: string
    amount: number
    available_on: number
    created: number
    currency: string
    description: unknown
    exchange_rate: number
    fee: number
    fee_details: [
        {
            amount: number
            application: unknown
            currency: string
            description: string
            type: string
        },
    ]
    net: number
    reporting_category: string
    source: string
    status: string
    type: string
}
export declare namespace balanceTransactions {
    let client: Function
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<BalanceTransactionsResponse>
    function list(
        params: {
            payout?: string
            type?: string
            available_on?: object
            created?: object
            currency?: string
            ending_before?: string
            limit?: number
            source?: unknown
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [BalanceTransactionsResponse]
    }>
}
export {}
//# sourceMappingURL=balanceTransactions.d.ts.map
