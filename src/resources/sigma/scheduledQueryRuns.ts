import qs from 'qs'
import { SQRResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace sigma {
    export let client: Function
    export namespace scheduledQueryRuns {
        export function retrieve(
            id: string,
            settings?: { stripeAccount?: string },
        ): Promise<SQRResponse> {
            return client(`/sigma/scheduled_query_runs/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: { stripeAccount?: string },
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
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
}
