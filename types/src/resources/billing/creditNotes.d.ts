declare type CreditNotesLines = {
    id: string
    object: string
    amount: number
    description: string
    discount_amount: number
    discount_amounts: [unknown]
    invoice_line_item: string
    livemode: boolean
    quantity: number
    tax_amounts: [unknown]
    tax_rates: [unknown]
    type: string
    unit_amount: unknown
    unit_amount_decimal: unknown
}
declare type CreditNotesResponse = {
    id: string
    object: string
    amount: number
    created: number
    currency: string
    customer: string
    customer_balance_transaction: unknown
    discount_amount: number
    discount_amounts: [unknown]
    invoice: string
    lines: {
        object: string
        data: [CreditNotesLines]
        has_more: boolean
        url: string
    }
    livemode: boolean
    memo: unknown
    metadata: object
    number: string
    out_of_band_amount: unknown
    pdf: string
    reason: unknown
    refund: unknown
    status: string
    subtotal: number
    tax_amounts: [object]
    total: number
    type: string
    voided_at: unknown
}
export declare namespace creditNotes {
    let client: Function
    function preview(
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
    ): Promise<CreditNotesResponse>
    function create(
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
    ): Promise<CreditNotesResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CreditNotesResponse>
    function update(
        id: string,
        params: {
            memo?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<CreditNotesResponse>
    function listLineItems(
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
    }>
    function listPreviewLineItems(
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
    }>
    function voidCreditNote(
        id: string,
        stripeAccount?: string,
    ): Promise<CreditNotesResponse>
    function list(
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
    }>
}
export {}
//# sourceMappingURL=creditNotes.d.ts.map
