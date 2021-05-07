import qs from 'qs'
import { ChargesResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace charges {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            customer?: string
            description?: string
            metadata?: object
            receipt_email?: string
            shipping?: {
                address: {
                    line1: string
                    city?: string
                    country?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                name: string
                carrier?: string
                phone?: string
                tracking_number?: string
            }
            source?: string
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture?: boolean
            on_behalf_of?: string
            transfer_data?: {
                destination: string
                amount?: number
            }
            transfer_group?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<ChargesResponse> {
        return client(`/charges`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: object
            receipt_email?: string
            shipping?: {
                address: {
                    line1: string
                    city?: string
                    country?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                name: string
                carrier?: string
                phone?: string
                tracking_number?: string
            }
            fraud_details?: {
                user_report: string
            }
            transfer_group?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function capture(
        id: string,
        params: {
            amount?: number
            receipt_email?: string
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            transfer_data?: {
                amount?: number
            }
            transfer_group?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}/capture`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            customer?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            payment_intent?: string
            starting_after?: string
            transfer_group?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ChargesResponse]
    }> {
        return client(`/charges?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
