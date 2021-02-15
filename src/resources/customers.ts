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
            source: unknown,
            metadata?: [string, unknown],
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveSource(
        cus_id: string,
        id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function updateSource(
        cus_id: string,
        id: string,
        params: {
            amounts?: number[],
            address_city?: string,
            address_country?: string, 
            address_line1?: string,
            address_line2?: string,
            address_state?: string,
            address_zip?: string,
            exp_month?: number,
            exp_year?: number,
            name?: string,
            metadata?: [string, unknown]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${id}`, params, 'POST', stripeAccount
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
        id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources/${id}`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listSource(
        cus_id: string,
        params: {
            object: string, // bank_account or card
            ending_before?: string,
            limit?: number,
            starting_after?: string 
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/sources?object=${params.object}&limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function createBalanceTransaction(
        id: string,
        params: {
            amount: number,
            currency: string,
            description?: string,
            metadata?: [string, unknown],
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/balance_transactions`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveBalanceTransaction(
        id: string,
        tra_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/balance_transactions/${tra_id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function updateBalanceTransaction(
        id: string,
        tra_id: string,
        params: {
            description?: string,
            metadata?: [string, unknown],
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/balance_transactions/${tra_id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listBalanceTransaction(
        id: string,
        params: {
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/balance_transactions?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function createTaxId(
        id: string,
        params: {
            type: string,
            value: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/tax_ids`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/tax_ids/${tax_id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function deleteTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/tax_ids/${tax_id}`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listTaxId(
        id: string,
        params: {
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${id}/tax_ids?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function deleteDiscount(
        cus_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/customers/${cus_id}/discount`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

}
