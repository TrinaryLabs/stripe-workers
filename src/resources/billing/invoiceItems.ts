export namespace invoiceItems {
    export let client: Function

    export function create(
        params: {
            customer: string,
            currency?: string,
            amount?: number,
            description?: string,
            metadata?: [string, unknown],
            period?: object,
            price?: string,
            discountable?: boolean,
            discounts?: string[],
            invoice?: string,
            price_data?: object,
            quantity?: number,
            tax_rates?: string,
            unit_amount?: number,
            unit_amount_decimal?: number  
        }, stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/invoiceitems`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/invoiceitems/${id}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function update(
        id: string,
        params: {
            amount?: number,
            description?: string,
            metadata?: [string, unknown],
            period?: object,
            price?: string,
            discountable?: boolean,
            discounts?: string[],
            price_data?: object,
            quantity?: number,
            tax_rates?: string,
            unit_amount?: number,
            unit_amount_decimal?: number  
        }, stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/invoiceitems/${id}`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function del(
        id: string,
        stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/invoiceitems/${id}`,
            {},
            'DELETE', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function list(
        params: {
            customer?: string,
            created?: number,
            ending_before?: string,
            invoice?: string,
            limit?: number,
            pending?: boolean,
            starting_after?: string
        }, stripeAccount?: string
    ) : Promise<unknown> {
        return client(
            `/invoiceitems?customer=${params.customer}&created=${params.created}&ending_before=${params.ending_before}&invoice=${params.invoice}&limit=${params.limit}&pending=${params.pending}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
}