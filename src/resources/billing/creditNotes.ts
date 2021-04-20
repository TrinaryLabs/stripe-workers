import qs from 'qs'
import { CreditNotesLines, CreditNotesResponse } from '../../types'

export namespace creditNotes {
    export let client: Function

    export function preview(
        params: {
            invoice: string
            lines?: object
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
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function create(
        params: {
            invoice: string
            lines?: object
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
        return client(`/credit_notes`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            memo?: string
            metadata?: object
        },
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listPreviewLineItems(
        params?: {
            invoice: string
            lines?: object
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
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function voidCreditNote(
        id: string,
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}/void`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
