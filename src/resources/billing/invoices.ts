import qs from 'qs'

type InvoicesResponse = {
    id: string
    object: string
    account_country: string
    account_name: string
    account_tax_ids: unknown
    amount_due: number
    amount_paid: number
    amount_remaining: number
    application_fee_amount: unknown
    attempt_count: number
    attempted: boolean
    auto_advance: boolean
    billing_reason: unknown
    charge: string
    collection_method: string
    created: number
    currency: string
    custom_fields: unknown
    customer: string
    customer_address: unknown
    customer_email: string
    customer_name: unknown
    customer_phone: unknown
    customer_shipping: unknown
    customer_tax_exempt: string
    customer_tax_ids: [unknown]
    default_payment_method: unknown
    default_source: unknown
    default_tax_rates: [unknown]
    description: unknown
    discount: unknown
    discounts: [unknown]
    due_date: unknown
    ending_balance: number
    footer: unknown
    hosted_invoice_url: string
    invoice_pdf: string
    last_finalization_error: unknown
    lines: {
        data: [InvoiceItemsResponse]
        has_more: boolean
        object: string
        url: string
    }
    livemode: boolean
    metadata: object
    next_payment_attempt: unknown
    number: unknown
    on_behalf_of: unknown
    paid: boolean
    payment_intent: unknown
    payment_settings: object
    period_end: number
    period_start: number
    post_payment_credit_notes_amount: number
    pre_payment_credit_notes_amount: number
    receipt_number: unknown
    starting_balance: number
    statement_descriptor: unknown
    status: string
    status_transitions: object
    subscription: string
    subtotal: number
    tax: unknown
    total: number
    total_discount_amounts: [unknown]
    total_tax_amounts: [unknown]
    transfer_data: unknown
    webhooks_delivered_at: number
}

type InvoiceItemsResponse = {
    id: string
    object: string
    amount: number
    currency: string
    description: string
    discount_amounts: [unknown]
    discountable: boolean
    discounts: [unknown]
    invoice_item: string
    livemode: boolean
    metadata: object
    period: object
    price: object
    proration: boolean
    quantity: number
    subscription: unknown
    tax_amounts: [unknown]
    tax_rates: [unknown]
    type: string
}

export namespace invoices {
    export let client: Function

    export function create(
        params: {
            customer: string
            auto_advance?: boolean
            collection_method?: string
            description?: string
            metdata?: [string, unknown]
            subscription?: string
            account_tax_ids?: string
            application_fee_amount?: number
            custom_fields?: string[]
            days_until_due?: number
            dafault_payment_method?: unknown
            dafault_source?: unknown
            dafault_tax_rates?: string
            discounts?: string[]
            due_date?: number
            footer?: unknown
            payment_settings?: object
            statment_desciptor?: string
            transfer_data?: object
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            auto_advance?: boolean
            collection_method?: string
            description?: string
            metadata?: [string, unknown]
            account_tax_ids?: string
            application_fee_amount?: number
            custom_fields?: string[]
            days_until_due?: number
            dafault_payment_method?: unknown
            dafault_source?: unknown
            dafault_tax_rates?: string
            discounts?: string[]
            due_date?: number
            footer?: unknown
            payment_settings?: object
            statment_desciptor?: string
            transfer_data?: object
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}`, params, 'POST', {
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
        return client(`/invoices/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function finalizeInvoice(
        id: string,
        params: {
            auto_advance?: boolean
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/finalize`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function pay(
        id: string,
        params: {
            forgive?: boolean
            off_session?: boolean
            paid_out_of_band?: boolean
            payment_method?: unknown
            source?: unknown
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/pay`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function sendInvoice(
        id: string,
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/send`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function voidInvoice(
        id: string,
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/void`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function markUncollectible(
        id: string,
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/mark_uncollectible`, {}, 'POST', {
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
        data: [InvoiceItemsResponse]
    }> {
        return client(
            `/invoices/${id}/lines?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function retrieveUpcomming(
        params: {
            customer: string
            subscription?: string
            discounts?: string[]
            invoice_items?: string[]
            schedule?: unknown
            subscription_billing_cycle_anchor?: unknown
            subscription_cancel_at?: unknown
            subscription_cancel_at_period_end?: unknown
            subscription_cancel_now?: unknown
            subscription_default_tax_rates?: unknown
            subscription_items?: string[]
            subscription_proration_behavior: unknown
            subscription_proration_date?: unknown
            subscription_start_date?: number
            subscription_trial_end?: number
            subscription_trial_from_plan?: unknown
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/upcoming?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function listUpcomingLineItems(
        params: {
            customer: string
            subscription?: string
            discounts?: string[]
            ending_before?: string
            invoice_items?: string[]
            limit?: number
            schedule?: unknown
            starting_after?: string
            subscription_billing_cycle_anchor?: unknown
            subscription_cancel_at?: number
            subscription_cancel_at_period_end?: boolean
            subscription_cancel_now?: boolean
            subscription_default_tax_rates?: string
            subscription_items?: string[]
            subscription_proration_behavior?: unknown
            subscription_proration_date?: unknown
            subscription_start_date?: unknown
            subscription_trial_end?: unknown
            subscription_trial_from_plan?: unknown
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoiceItemsResponse]
    }> {
        return client(
            `/invoices/upcoming/lines?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function list(
        params: {
            customer?: string
            status?: string
            subscription?: string
            collection_method?: string
            created?: number
            due_date?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoicesResponse]
    }> {
        return client(`/invoices?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
