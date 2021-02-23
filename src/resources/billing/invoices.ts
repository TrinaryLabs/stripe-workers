import qs from 'qs'

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
    ): Promise<unknown> {
        return client(
            `/invoices`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
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
    ): Promise<unknown> {
        return client(
            `/invoices/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function del(id: string, stripeAccount?: string): Promise<unknown> {
        return client(
            `/invoices/${id}`,
            {},
            'DELETE',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function finalizeInvoice(
        id: string,
        params: {
            auto_advance?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/finalize`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
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
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/pay`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function sendInvoice(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/send`,
            {},
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function voidInvoice(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/void`,
            {},
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function markUncollectible(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/mark_uncollectible`,
            {},
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function listLineItems(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/invoices/${id}/lines?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
    ): Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/invoices/upcoming?`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )*/
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
    ): Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/invoices/upcoming/lines`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        ) */
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
    ): Promise<unknown> {
        throw Error('not implemented')
        /* return client(
            `/invoices?`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        ) */
    }
}
