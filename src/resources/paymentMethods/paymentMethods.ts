export namespace paymentMethods {
    export let client: Function

    export function create(
        params: {
            type: string,
            billing_details?: object,
            metadata?: [string, unknown],
            alipay?: object,
            au_becs_debit?: object,
            bacs_debit?: object,
            bancontact?: object,
            card?: object,
            eps?: object,
            fpx?: object,
            giropay?: object,
            grabpay?: object,
            ideal?: object,
            interac_present?: object,
            oxxo?: object,
            p24?: object,
            sepa_debit?: object,
            sofort?: object
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            '/payment_methods',
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
            `/payment_methods/${id}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function update(
        id: string,
        params: {
            billing_details?: object,
            metadata?: [string, unknown],
            card?: object
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/payment_methods/${id}`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function list(
        params: {
            customer: string,
            type: string,
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/payment_methods?customer=${params.customer}&type=${params.type}&limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function attach(
        id: string,
        params: {
            customer: string
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/payment_methods/${id}/attach`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function detach(
        id: string,
        stripeAccount?: string) : Promise<unknown> {
        return client(
            `/payment_methods/${id}/detach`,
            {},
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
}
