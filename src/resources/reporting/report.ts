import qs from 'qs'
import { ReportRunResponse, ReportTypeResponse } from '../../types'
export namespace reporting {
    export namespace reportRuns {
        export let client: Function

        export function create(
            params: {
                report_type: string
                parameters?: object
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
            params: {
                created?: object //how to send this???
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
        export let client: Function

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
