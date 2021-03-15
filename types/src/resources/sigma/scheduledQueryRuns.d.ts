declare type SQRResponse = {
    id: string
    object: string
    created: number
    data_load_time: number
    file: object
    livemode: boolean
    result_available_until: number
    sql: string
    status: string
    title: string
}
export declare namespace sigma {
    namespace scheduledQueryRuns {
        let client: Function
        function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<SQRResponse>
        function list(
            params: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [SQRResponse]
        }>
    }
}
export {}
//# sourceMappingURL=scheduledQueryRuns.d.ts.map
