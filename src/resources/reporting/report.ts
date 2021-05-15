import qs from 'qs'
import { ReportRunResponse, ReportTypeResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace reporting {
    export let client: Function
    export namespace reportRuns {
        export function create(
            params: {
                report_type: string
                parameters?: {
                    columns?: string
                    connected_account?: string
                    currency?: string
                    interval_end?: number
                    interval_start?: number
                    payout?: string
                    reporting_category?: string
                    timezone?: string
                }
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<ReportRunResponse> {
            return client(`/reporting/report_runs?${qs.stringify(settings?.expand)}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<ReportRunResponse> {
            return client(`/reporting/report_runs/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
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
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportRunResponse]
        }> {
            return client(
                `/reporting/report_runs?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }

    export namespace reportTypes {
        export function retrieve(
            id: string,
            settings?: { stripeAccount?: string },
        ): Promise<ReportTypeResponse> {
            return client(`/reporting/report_types/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(settings?: {
            stripeAccount?: string
        }): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportTypeResponse]
        }> {
            return client(`/reporting/report_types`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }
    }
}
