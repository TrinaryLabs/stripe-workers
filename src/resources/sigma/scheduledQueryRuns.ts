import qs from 'qs'

type SQRResponse = {
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

export namespace sigma {
    export namespace scheduledQueryRuns {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<SQRResponse> {
            return client(`/sigma/scheduled_query_runs/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
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
        }> {
            return client(
                `/sigma/scheduled_query_runs?${qs.stringify(params)}`,
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
}
