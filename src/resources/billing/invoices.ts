import qs from 'qs'
import { InvoicesResponse, InvoiceItemsResponse } from '../../types'

export namespace invoices {
    export let client: Function

    export function create(
        params: {
            customer: string
            auto_advance?: boolean
            collection_method?: string
            description?: string
            metadata?: object
            subscription?: string
            account_tax_ids?: string
            application_fee_amount?: number
            custom_fields?: string[]
            days_until_due?: number
            dafault_payment_method?: string
            dafault_source?: string
            dafault_tax_rates?: [string]
            discounts?: string[]
            due_date?: number
            footer?: string
            payment_settings?: {
                payment_method_options?: {
                    bancontact?: {
                        preferred_language?: string
                    }
                    card?: {
                        request_three_d_secure?: string
                    }
                } 
                payment_method_types?: string
            }
            statment_desciptor?: string
            transfer_data?: {
                destination: string
                amount?: number
            }
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
            metadata?: object
            account_tax_ids?: string
            application_fee_amount?: number
            custom_fields?: string[]
            days_until_due?: number
            dafault_payment_method?: string
            dafault_source?: string
            dafault_tax_rates?: [string]
            discounts?: [string]
            due_date?: number
            footer?: string
            payment_settings?: {
                payment_method_options?: {
                    bancontact?: {
                        preferred_language?: string
                    }
                    card?: {
                        request_three_d_secure?: string
                    }
                } 
                payment_method_types?: string
            }
            statment_desciptor?: string
            transfer_data?: {
                destination: string
                amount?: number
            }
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
            payment_method?: string
            source?: string
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
        params?: {
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
        params?: {
            customer: string
            subscription?: string
            discounts?: string[]
            invoice_items?: [
                {
                    amount?: number
                    currency?: string
                    description?: string
                    discountable?: boolean
                    discounts?: [
                        {
                            coupon?: string
                            discount?: string
                        }
                    ]
                    invoiceitem?: string
                    metadata?: object
                    period?: {
                        end: number
                        start: number
                    }
                    price?: string
                    price_data?: {
                        currency: string
                        product: string
                        unit_amount_decimal?: number
                        unit_amount?: number
                    }
                    quantity?: number
                    tax_rates?: [string]
                    unit_amount?: number
                    unit_amount_decimal?: number
                }
            ]
            schedule?: string
            subscription_billing_cycle_anchor?: string
            subscription_cancel_at?: number
            subscription_cancel_at_period_end?: boolean
            subscription_cancel_now?: boolean
            subscription_default_tax_rates?: [string]
            subscription_items?: [
                {
                    id?: string
                    billing_thresholds?: {
                        usage_gte: number
                    }
                    clear_usages?: boolean
                    deleted?: boolean
                    metadata?: object
                    price?: string
                    price_data?: {
                        currency: string
                        product: string
                        recurring: {
                            interval: string
                            interval_count?: number
                        }
                        unit_amount_decimal?: number
                        unit_amount?: number
                    }
                    tax_rates?: [string]
                }
            ]
            subscription_proration_behavior: string
            subscription_proration_date?: number
            subscription_start_date?: number
            subscription_trial_end?: number
            subscription_trial_from_plan?: boolean
        },
        stripeAccount?: string,
    ): Promise<InvoicesResponse> {
        return client(`/invoices/upcoming?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function listUpcomingLineItems(
        params?: {
            customer: string
            subscription?: string
            discounts?: string[]
            ending_before?: string
            invoice_items?: [
                {
                    amount?: number
                    currency?: string
                    description?: string
                    discountable?: boolean
                    discounts?: [
                        {
                            coupon?: string
                            discount?: string
                        }
                    ]
                    invoiceitem?: string
                    metadata?: object
                    period?: {
                        end: number
                        start: number
                    }
                    price?: string
                    price_data?: {
                        currency: string
                        product: string
                        unit_amount_decimal?: number
                        unit_amount?: number
                    }
                    quantity?: number
                    tax_rates?: [string]
                    unit_amount?: number
                    unit_amount_decimal?: number
                }
            ]
            limit?: number
            schedule?: string
            starting_after?: string
            subscription_billing_cycle_anchor?: string
            subscription_cancel_at?: number
            subscription_cancel_at_period_end?: boolean
            subscription_cancel_now?: boolean
            subscription_default_tax_rates?: string
            subscription_items?: [
                {
                    id?: string
                    billing_thresholds?: {
                        usage_gte: number
                    }
                    clear_usages?: boolean
                    deleted?: boolean
                    metadata?: object
                    price?: string
                    price_data?: {
                        currency: string
                        product: string
                        recurring: {
                            interval: string
                            interval_count?: number
                        }
                        unit_amount_decimal?: number
                        unit_amount?: number
                    }
                    tax_rates?: [string]
                }
            ]
            subscription_proration_behavior?: string
            subscription_proration_date?: number
            subscription_start_date?: number
            subscription_trial_end?: number
            subscription_trial_from_plan?: boolean
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
        params?: {
            customer?: string
            status?: string
            subscription?: string
            collection_method?: string
            created?: number
            due_date?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
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
