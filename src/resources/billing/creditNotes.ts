import qs from 'qs'

type CreditNotesLines = {
    id: string
    object: string
    amount: number
    description: string
    discount_amount: number
    discount_amounts: [
        {
            amount: number
            discount: string
        }
    ]
    invoice_line_item: string
    livemode: boolean
    quantity: number
    tax_amounts: [
        {
            amount: number
            inclusive: boolean
            tax_rate: string
        }
    ]
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            created: number
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        }
    ]
    type: string
    unit_amount: number
    unit_amount_decimal: string
}

type CreditNotesResponse = {
    id: string
    object: string
    amount: number
    created: number
    currency: string
    customer: string
    customer_balance_transaction: string
    discount_amount: number
    discount_amounts: [
        {
            amount: number
            discount: string
        }
    ]
    invoice: string
    lines: {
        object: string
        data: [CreditNotesLines]
        has_more: boolean
        url: string
    }
    livemode: boolean
    memo: string
    metadata: object
    number: string
    out_of_band_amount: number
    pdf: string
    reason: string
    refund: string
    status: string
    subtotal: number
    tax_amounts: [object]
    total: number
    type: string
    voided_at: number
}

export namespace creditNotes {
    export let client: Function

    export function preview(
        params: {
            invoice: string
            lines?: object
            memo?: string
            metadata?: [string, unknown]
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
            metadata?: [string, unknown]
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
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<CreditNotesResponse> {
        return client(`/credit_notes/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function listLineItems(
        id: string,
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
        params: {
            invoice: string
            lines?: object
            memo?: string
            metadata?: [string, unknown]
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
        params: {
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
