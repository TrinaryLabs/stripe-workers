import qs from 'qs'

type InvoicesResponse = {
    id: string
    object: string
    account_country: string
    account_name: string
    account_tax_ids: [string]
    amount_due: number
    amount_paid: number
    amount_remaining: number
    application_fee_amount: number
    attempt_count: number
    attempted: boolean
    auto_advance: boolean
    billing_reason: string
    charge: string
    collection_method: string
    created: number
    currency: string
    custom_fields: [
        {
            name: string
            value: string
        }
    ]
    customer: string
    customer_address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    customer_email: string
    customer_name: string
    customer_phone: string
    customer_shipping: {
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
    customer_tax_exempt: string
    customer_tax_ids: [
        {
            type: string
            value: string
        }
    ]
    default_payment_method: string
    default_source: string
    default_tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        }
    ]
    description: string
    discount: object
    discounts: [string]
    due_date: number
    ending_balance: number
    footer: string
    hosted_invoice_url: string
    invoice_pdf: string
    last_finalization_error: {
        code: string
        doc_url: string
        message: string
        param: string
        payment_method_type: string
        type: string
    }
    lines: {
        data: [InvoiceItemsResponse]
        has_more: boolean
        object: string
        url: string
    }
    livemode: boolean
    metadata: object
    next_payment_attempt: number
    number: string
    on_behalf_of: string
    paid: boolean
    payment_intent: string
    payment_settings: {
        payment_method_options: {
            bancontact: {
                preferred_language: string
            }
            card: {
                request_three_d_secure: string
            }
        }
        payment_method_types: [string]
    }
    period_end: number
    period_start: number
    post_payment_credit_notes_amount: number
    pre_payment_credit_notes_amount: number
    receipt_number: string
    starting_balance: number
    statement_descriptor: string
    status: string
    status_transitions: object
    subscription: string
    subtotal: number
    tax: number
    total: number
    total_discount_amounts: [
        {
            amount: number
            discount: string
        }
    ]
    total_tax_amounts: [
        {
            amount: number
            inclusive: boolean
            tax_rate: string
        }
    ]
    transfer_data: {
        amount: number
        destination: string
    }
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
