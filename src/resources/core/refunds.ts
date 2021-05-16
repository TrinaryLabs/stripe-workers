import qs from 'qs'
import { RefundsResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace refunds {
    export let client: Function

    export function create(
        params: {
            charge?: string
            amount?: number
            metadata?: object
            payment_intent?: string
            reason?: string
            refund_application_fee?: boolean
            reverse_transfer?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<RefundsResponse> {
        return client(
            `/refunds?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<RefundsResponse> {
        return client(
            `/refunds/${id}?${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<RefundsResponse> {
        return client(
            `/refunds/${id}?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function list(
        params?: {
            charge?: string
            payment_intent?: string
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
        data: [RefundsResponse]
    }> {
        return client(
            `/refunds?${qs.stringify(params)}&${qs.stringify({
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
