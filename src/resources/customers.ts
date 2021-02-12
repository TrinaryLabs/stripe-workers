export namespace customers {
    export let client: Function

    export function create(
        params: {
            adress?: object,
            description?: string,
            metadata?: [string, unknown],
            name?: string,
            payment_method?: string,
            phone?: string,
            shipping?: object,
            balance?: number,
            coupon?: unknown,
            invoice_prefix?: string,
            invoice_settings?: object,
            next_invoice_sequence?: unknown,
            preferred_locales?: unknown,
            promotion_code?: string,
            source?: unknown,
            tax_exempt?: string,
            tax_id_data?: object
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client('/customers', params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function update(
        id: string,
        params: {
            adress?: object,
            description?: string,
            metadata?: [string, unknown],
            name?: string,
            payment_method?: string,
            phone?: string,
            shipping?: object,
            balance?: number,
            coupon?: unknown,
            invoice_prefix?: string,
            invoice_settings?: object,
            next_invoice_sequence?: unknown,
            preferred_locales?: unknown,
            promotion_code?: string,
            source?: unknown,
            tax_exempt?: string,
        }, stripeAccount: string
    ) : Promise<unknown> {
        return client(`/customers/${id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function del(id: string, stripeAccount?: string) : Promise<unknown> {
        return client(`/customers/${id}`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function list(
        params: {
            email?: string,
            created?: object,
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers?email=${params.email}&created=${params.created}&limit=${params.limit}&starting_after=${params.starting_after}&ending_before=${params.ending_before}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }
}
