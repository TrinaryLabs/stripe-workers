import qs from 'qs'
import { InvoicesResponse, InvoiceItemsResponse } from '../../types'
import { returnToHeaders } from '../../util'

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
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}?${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
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
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/invoices/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function finalizeInvoice(
        id: string,
        params: {
            auto_advance?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/finalize?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
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
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/pay?${qs.stringify(settings?.expand)}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function sendInvoice(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/send?${qs.stringify(settings?.expand)}`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function voidInvoice(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/void?${qs.stringify(settings?.expand)}`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function markUncollectible(
        id: string,
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/${id}/mark_uncollectible?${qs.stringify(settings?.expand)}`, {}, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function listLineItems(
        id: string,
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoiceItemsResponse]
    }> {
        return client(
            `/invoices/${id}/lines?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
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
                        },
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
                },
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
                },
            ]
            subscription_proration_behavior: string
            subscription_proration_date?: number
            subscription_start_date?: number
            subscription_trial_end?: number
            subscription_trial_from_plan?: boolean
        },
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<InvoicesResponse> {
        return client(`/invoices/upcoming?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
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
                        },
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
                },
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
                },
            ]
            subscription_proration_behavior?: string
            subscription_proration_date?: number
            subscription_start_date?: number
            subscription_trial_end?: number
            subscription_trial_from_plan?: boolean
        },
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoiceItemsResponse]
    }> {
        return client(
            `/invoices/upcoming/lines?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
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
        settings?: { 
            stripeAccount?: string
            expand?: [string]
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoicesResponse]
    }> {
        return client(`/invoices?${qs.stringify(params)}&${qs.stringify(settings?.expand)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
