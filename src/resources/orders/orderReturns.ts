import qs from 'qs'
import { OrderReturnsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace orderReturns {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<OrderReturnsResponse> {
        return client(
            `/order_returns/${id}?${qs.stringify({
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
            order?: string
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
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [OrderReturnsResponse]
    }> {
        return client(
            `/order_returns?${qs.stringify(params)}&${qs.stringify({
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
