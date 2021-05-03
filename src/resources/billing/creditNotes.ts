import qs from 'qs'
import { CreditNotesLines, CreditNotesResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace creditNotes {
    export let client: Function

    export function preview(
        params: {
            invoice: string
            lines?: {
                type: string
                amount?: number
                description?: string
                invoice_line_item?: string
                quantity?: number
                tax_rates?: [string]
                unit_amount?: number
                unit_amount_decimal?: number
            }
            memo?: string
            metadata?: object
            reason?: string
            amount?: number
            credit_amount?: number
            out_of_band_amount?: number
            refund?: string
            refund_amount?: number
        },
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(
            `/credit_notes/preview?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: returnToHeaders({stripeAccount}),
            },
        )
    }

    export function create(
        params: {
            invoice: string
            lines?: {
                type: string
                amount?: number
                description?: string
                invoice_line_item?: string
                quantity?: number
                tax_rates?: [string]
                unit_amount?: number
                unit_amount_decimal?: number
            }
            memo?: string
            metadata?: object
            reason?: string
            amount?: number
            credit_amount?: number
            out_of_band_amount?: number
            refund?: string
            refund_amount?: number
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function update(
        id: string,
        params: {
            memo?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function listLineItems(
        id: string,
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CreditNotesLines]
    }> {
        return client(
            `/credit_notes/${id}/lines?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: returnToHeaders({stripeAccount}),
            },
        )
    }

    export function listPreviewLineItems(
        params?: {
            invoice: string
            lines?: {
                type: string
                amount?: number
                description?: string
                invoice_line_item?: string
                quantity?: number
                tax_rates?: [string]
                unit_amount?: number
                unit_amount_decimal?: number
            }
            memo?: string
            metadata?: object
            reason?: string
            amount?: number
            credit_amount?: number
            out_of_band_amount?: number
            refund?: string
            refund_amount?: number
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CreditNotesLines]
    }> {
        return client(
            `/credit_notes/preview/lines?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: returnToHeaders({stripeAccount}),
            },
        )
    }

    export function voidCreditNote(
        id: string,
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}/void`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            customer?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CreditNotesResponse]
    }> {
        return client(`/credit_notes?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }
}
