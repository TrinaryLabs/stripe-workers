export namespace creditNotes {
    export let client: Function

    export function preview(
        params: {
            invoice: string,
            lines?: object,
            memo?: string,
            metadata?: [string, unknown],
            reason?: string,
            amount?: number,
            credit_amount?: number,
            out_of_band_amount?: number,
            refund?: string,
            refund_amount?: number
        }, stripeAccount?: string
    ) : Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/credit_notes/preview?`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )*/
    }

    export function create(
        params: {
            invoice: string,
            lines?: object,
            memo?: string,
            metadata?: [string, unknown],
            reason?: string,
            amount?: number,
            credit_amount?: number,
            out_of_band_amount?: number,
            refund?: string,
            refund_amount?: number
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/credit_notes`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string) : Promise<unknown> {
        return client(
            `/credit_notes/${id}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function update(
        id: string,
        params: {
            memo?: string,
            metadata?: [string, unknown] 
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/credit_notes/${id}`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
    
    export function listLineItems(
        id: string,
        params: {
            ending_before?: string,
            limit?: number,
            starting_after?: string 
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/credit_notes/${id}/lines?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function listPreviewLineItems(
        params: {
            invoice: string,
            lines?: object,
            memo?: string,
            metadata?: [string, unknown],
            reason?: string,
            amount?: number,
            credit_amount?: number,
            out_of_band_amount?: number,
            refund?: string,
            refund_amount?: number,
            limit?: number,
            ending_before?: string,
            starting_after?: string
        }, stripeAccount?: string
    ) : Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/credit_notes/preview/lines?`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )*/
    }

    export function voidCreditNote(
        id: string,
        stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/credit_notes/${id}/void`,
            {},
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function list(
        params: {
            customer?: string,
            ending_before?: string,
            limit?: number,
            starting_after?: string, 
        }, stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/credit_notes?customer=${params.customer}&limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
}