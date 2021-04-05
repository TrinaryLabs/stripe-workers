import qs from 'qs'

type CustomersResponse = {
    id: string
    object: string
    address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    balance: number
    created: number
    currency: string
    default_source: string
    delinquent: boolean
    description: string
    discount: object
    email: string
    invoice_prefix: string
    invoice_settings: object
    livemode: boolean
    metadata: object
    name: string
    next_invoice_sequence: number
    phone: string
    preferred_locales: []
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        name: string
        phone: string
    }
    tax_exempt: string
    tax_ids: {
        object: string
        has_more: boolean
        url: string
        data: [
            {
                id: string
                object: string
                country: string
                created: number
                customer: string
                livemode: boolean
                type: string
                value: string
                verification: {
                    status: string
                    verified_address: string
                    verified_name: string
                }
            }
        ]
    }
}

type SourcesResponse = {
    id: string
    amount: unknown
    currency: string
    customer: string
    metadata: object
    owner: object
    redirect: object
    statement_descriptor: string
    status: string
    type: string
    object: string
    client_secret: string
    code_verification: object
    created: number
    flow: string
    livemode: boolean
    receiver: object
    source_order: object
    usage: string
    ach_credit_transfer: object
}

type CardSourceResponse = {
    id: string
    object: string
    address_city: string
    address_country: string
    address_line1: string
    address_line1_check: string
    address_line2: string
    address_state: string
    address_zip: string
    address_zip_check: string
    brand: string
    country: string
    customer: string
    cvc_check: string
    dynamic_last4: string
    exp_month: number
    exp_year: number
    fingerprint: string
    funding: string
    last4: string
    metadata: object
    name: string
    tokenization_method: string
    account: string
    available_payout_methods: [unknown]
    currency: string
    recipient: string
}

type BankAccountResponse = {
    id: string
    object: string
    account_holder_name: string
    account_holder_type: string
    bank_name: string
    country: string
    currency: string
    customer: string
    fingerprint: string
    last4: string
    metadata: object
    routing_number: string
    status: string
    account: string
    available_payout_methods: [unknown]
}

type TaxIDsResponse = {
    id: string
    object: string
    country: string
    created: number
    customer: string
    livemode: boolean
    type: string
    value: string
    verification: {
        status: string
        verified_address: string
        verified_name: string
    }
}

type CustomerBalanceTransactionResponse = {
    id: string
    amount: number
    currency: string
    customer: string
    description: string
    ending_balance: number
    metadata: object
    type: string
    object: string
    created: number
    credit_note: string
    invoice: string
    livemode: boolean
}

export namespace customers {
    export let client: Function

    export function create(
        params: {
            adress?: object
            description?: string
            metadata?: [string, unknown]
            name?: string
            payment_method?: string
            phone?: string
            shipping?: object
            balance?: number
            coupon?: unknown
            invoice_prefix?: string
            invoice_settings?: object
            next_invoice_sequence?: unknown
            preferred_locales?: unknown
            promotion_code?: string
            source?: unknown
            tax_exempt?: string
            tax_id_data?: object
        },
        stripeAccount?: string,
    ): Promise<CustomersResponse> {
        return client('/customers', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CustomersResponse> {
        return client(`/customers/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            adress?: object
            description?: string
            metadata?: [string, unknown]
            name?: string
            payment_method?: string
            phone?: string
            shipping?: object
            balance?: number
            coupon?: unknown
            invoice_prefix?: string
            invoice_settings?: object
            next_invoice_sequence?: unknown
            preferred_locales?: unknown
            promotion_code?: string
            source?: unknown
            tax_exempt?: string
        },
        stripeAccount: string,
    ): Promise<CustomersResponse> {
        return client(`/customers/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function del(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            email?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CustomersResponse]
    }> {
        return client(`/customers?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createSource(
        cus_id: string,
        params: {
            source: unknown
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse | CardSourceResponse | BankAccountResponse> {
        return client(`/customers/${cus_id}/sources`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveSource(
        cus_id: string,
        id: string,
        stripeAccount?: string,
    ): Promise<CardSourceResponse | BankAccountResponse> {
        return client(`/customers/${cus_id}/sources/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function updateSource(
        cus_id: string,
        id: string,
        params: {
            amounts?: number[]
            address_city?: string
            address_country?: string
            address_line1?: string
            address_line2?: string
            address_state?: string
            address_zip?: string
            exp_month?: number
            exp_year?: number
            name?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<CardSourceResponse | BankAccountResponse> {
        return client(`/customers/${cus_id}/sources/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function verifySource(
        cus_id: string,
        ba_id: string,
        params: {
            account_holder_name?: string
            account_holder_type?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<BankAccountResponse> {
        return client(
            `/customers/${cus_id}/sources/${ba_id}/verify`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function deleteSource(
        cus_id: string,
        id: string,
        stripeAccount?: string,
    ): Promise<
        | SourcesResponse
        | {
              id: string
              object: string
              deleted: boolean
          }
    > {
        return client(`/customers/${cus_id}/sources/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function listSource(
        cus_id: string,
        params: {
            object: string // bank_account or card
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CardSourceResponse | BankAccountResponse]
    }> {
        return client(
            `/customers/${cus_id}/sources?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function createBalanceTransaction(
        id: string,
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(`/customers/${id}/balance_transactions`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveBalanceTransaction(
        id: string,
        tra_id: string,
        stripeAccount?: string,
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(
            `/customers/${id}/balance_transactions/${tra_id}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function updateBalanceTransaction(
        id: string,
        tra_id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(
            `/customers/${id}/balance_transactions/${tra_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listBalanceTransaction(
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
        data: [CustomerBalanceTransactionResponse]
    }> {
        return client(
            `/customers/${id}/balance_transactions?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function createTaxId(
        id: string,
        params: {
            type: string
            value: string
        },
        stripeAccount?: string,
    ): Promise<TaxIDsResponse> {
        return client(`/customers/${id}/tax_ids`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ): Promise<TaxIDsResponse> {
        return client(`/customers/${cus_id}/tax_ids/${tax_id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function deleteTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${cus_id}/tax_ids/${tax_id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function listTaxId(
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
        data: [TaxIDsResponse]
    }> {
        return client(
            `/customers/${id}/tax_ids?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function deleteDiscount(
        cus_id: string,
        stripeAccount?: string,
    ): Promise<{
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${cus_id}/discount`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
