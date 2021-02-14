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

    export function createSource(
        cus_id: string,
        params: {
            source: {
                object: string,
                country: string,
                currency: string,
                account_holder_name?: string,
                account_holder_type?: string,
                routing_number?: string,
                account_number: string
            },
            metadata?: [string, unknown],
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveSource(
        cus_id: string,
        ba_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${ba_id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function updateSource(
        cus_id: string,
        ba_id: string,
        params: {
            amounts: number[]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${ba_id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function verifySource(
        cus_id: string,
        ba_id: string,
        params: {
            account_holder_name?: string,
            account_holder_type?: string,
            metadata?: [string, unknown],
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${ba_id}/verify`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function deleteSource(
        cus_id: string,
        ba_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${ba_id}`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listSource(
        cus_id: string,
        params: {
            object: string, // bank_account
            ending_before?: string,
            limit?: number,
            starting_after?: string 
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources?object=${params.object}&limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }
}
