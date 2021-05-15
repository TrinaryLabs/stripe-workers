import qs from 'qs'
import { DisputesResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace disputes {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string,
            expand?: [string]
        }
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            evidence?: {
                access_activity_log: string
                zilling_address: string
                cancellation_policy: string
                cancellation_policy_disclosure: string
                cancellation_rebuttal: string
                customer_communication: string
                customer_email_address: string
                customer_name: string
                customer_purchase_ip: string
                customer_signature: string
                duplicate_charge_documentation: string
                duplicate_charge_explanation: string
                duplicate_charge_id: string
                product_description: string
                receipt: string
                refund_policy: string
                refund_policy_disclosure: string
                refund_refusal_explanation: string
                service_date: string
                service_documentation: string
                shipping_address: string
                shipping_carrier: string
                shipping_date: string
                shipping_documentation: string
                shipping_tracking_number: string
                uncategorized_file: string
                uncategorized_text: string
            }
            metadata?: object
            submit?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function close(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<DisputesResponse> {
        return client(`/disputes/${id}/close?${qs.stringify(settings?.expand)}`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
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
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [DisputesResponse]
    }> {
        return client(`/disputes?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, params, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
