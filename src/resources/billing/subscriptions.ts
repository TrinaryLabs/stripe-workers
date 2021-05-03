import qs from 'qs'
import { SubscriptionResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace subscriptions {
    export let client: Function

    export function create(
        params: {
            customer: string
            items: [
                {
                    billing_thresholds?: {
                        usage_gte: number
                    }
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
                    quantity?: number
                    tax_rates?: [string]
                }
            ]
            cancel_at_period_end?: boolean
            default_payment_method?: string
            metadata?: object
            add_invoice_items?: string[]
            application_fee_percent?: string
            backdate_start_date?: number
            billing_cycle_anchor?: number
            billing_thresholds?: {
                amount_gte?: number
                reset_billing_cycle_anchor?: string
            }
            cancel_at?: number
            collection_method?: string
            coupon?: string
            days_until_due?: number
            default_source?: string
            default_tax_rates?: string
            off_session?: boolean
            payment_behavior?: string
            pending_invoice_item_inteval?: {
                interval: string
                interval_count?: number
            }
            promotion_code?: string
            proration_behavior?: string
            transfer_data?: {
                destination: string
                amount_percent?: number
            }
            trial_end?: number
            trial_from_plan?: boolean
            trial_period_days?: number
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, {}, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function update(
        id: string,
        params: {
            items: [
                {
                    billing_thresholds?: {
                        usage_gte: number
                    }
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
                    quantity?: number
                    tax_rates?: [string]
                }
            ]
            cancel_at_period_end?: boolean
            metadata?: object
            add_invoice_items?: string[]
            application_fee_percent?: string
            proration_behavior?: string
            billing_cycle_anchor?: string
            billing_thresholds?: {
                amount_gte?: number
                reset_billing_cycle_anchor?: string
            }
            cancel_at?: number
            collection_method?: string
            coupon?: string
            days_until_due?: number
            default_source?: string
            dafault_tax_rates?: string
            off_session?: boolean
            pause_collection?: {
                behavior: string
                resumes_at?: number
            }
            payment_behavior?: string
            pending_invoice_item_inteval?: {
                interval: string
                interval_count?: number
            }
            promotion_code?: string
            proration_date?: number
            transfer_data?: {
                destination: string
                amount_percent?: number
            }
            trial_end?: number
            trial_from_plan?: boolean
        },
        settings?: {
            stripeAccount?: string,
            idempotencyKey?: string 
        },
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        params?: {
            invoice_now?: boolean
            prorate?: boolean
        },
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, params, 'DELETE', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function list(
        params?: {
            customer?: string
            price?: string
            status?: string
            collection_method?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            current_period_end?: {
                gt?: number
                gte?: number
                lt?: number
                lte?: number
            }
            current_period_start?: {
                gt?: number
                gte?: number
                lt?: number
                lte?: number
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
        data: [SubscriptionResponse]
    }> {
        return client(`/subscriptions?${qs.stringify(params)}`, params, 'GET', {
            headers: returnToHeaders({stripeAccount}),
        })
    }

    export function deleteDiscount(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        object: string
        deleted: boolean
    }> {
        return client(`/subscriptions/${id}/discount`, {}, 'DELETE', {
            headers: returnToHeaders({stripeAccount}),
        })
    }
}
