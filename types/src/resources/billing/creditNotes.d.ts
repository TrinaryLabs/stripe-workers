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
    ): Promise<unknown>
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
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            memo?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function listLineItems(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
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
    ): Promise<unknown>
    function voidCreditNote(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            customer?: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=creditNotes.d.ts.map
