import qs from 'qs'
import { SubscriptionResponse } from '../../types'

export namespace subscriptions {
    export let client: Function

    export function create(
        params: {
            customer: string
            items: object
            cancel_at_period_end?: boolean
            default_payment_method?: unknown
            metadata?: object
            add_invoice_items?: string[]
            application_fee_percent?: string
            backdate_start_date?: unknown
            billing_cycle_anchor?: unknown
            billing_thresholds?: object
            cancel_at?: unknown
            collection_method?: unknown
            coupon?: string
            days_until_due?: number
            default_source?: unknown
            default_tax_rates?: string
            off_session?: unknown
            payment_behavior?: string
            pending_invoice_item_inteval?: object
            promotion_code?: string
            proration_behavior?: unknown
            transfer_data?: object
            trial_end?: number
            trial_from_plan?: boolean
            trial_period_days?: number
        },
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            items: object
            cancel_at_period_end?: boolean
            metadata?: object
            add_invoice_items?: string[]
            application_fee_percent?: string
            proration_behavior?: string
            billing_cycle_anchor?: string
            billing_thresholds?: object
            cancel_at?: number
            collection_method?: unknown
            coupon?: string
            days_until_due?: number
            default_source?: unknown
            dafault_tax_rates?: string
            off_session?: unknown
            pause_collection?: unknown
            payment_behavior?: string
            pending_invoice_item_interval?: object
            promotion_code?: string
            proration_date?: unknown
            transfer_data?: object
            trial_end?: number
            trial_from_plan?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function del(
        id: string,
        params: {
            invoice_now?: unknown
            prorate?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionResponse> {
        return client(`/subscriptions/${id}`, params, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            customer?: string
            price?: string
            status?: string
            collection_method?: unknown
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
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
