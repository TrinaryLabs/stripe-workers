import qs from 'qs'
import { ReportRunResponse, ReportTypeResponse } from '../../types'
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
                },
            },
            stripeAccount?: string,
        ): Promise<ReportRunResponse> {
            return client(`/reporting/report_runs`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ReportRunResponse> {
            return client(`/reporting/report_runs/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
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
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportRunResponse]
        }> {
            return client(
                `/reporting/report_runs?${qs.stringify(params)}`,
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

    export namespace reportTypes {
        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ReportTypeResponse> {
            return client(`/reporting/report_types/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ReportTypeResponse]
        }> {
            return client(`/reporting/report_types`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }
    }
}
