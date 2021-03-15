declare type ReportRunResponse = {
    id: string
    object: string
    created: number
    error: unknown
    livemode: boolean
    parameters: object
    report_type: string
    result: object
    status: string
    succeeded_at: number
}
declare type ReportTypeResponse = {
    id: string
    object: string
    data_available_end: number
    data_available_start: number
    default_columns: [string]
    name: string
    updated: number
    version: number
}
export declare namespace reporting {
    namespace reportRuns {
        let client: Function
        function create(
            params: {
                report_type: string
                parameters?: object
            },
            stripeAccount?: string,
        ): Promise<ReportRunResponse>
        function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ReportRunResponse>
        function list(
            params: {
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportRunResponse]
        }>
    }
    namespace reportTypes {
        let client: Function
        function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ReportTypeResponse>
        function list(
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportTypeResponse]
        }>
    }
}
export {}
//# sourceMappingURL=report.d.ts.map
