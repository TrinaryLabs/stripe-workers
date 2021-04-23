import qs from 'qs'
import { SubscriptionSchedulesResponse } from '../../types'
export namespace subscriptionSchedules {
    export let client: Function

    export function create(
        params: {
            customer?: string
            metadata?: object
            phases?: [
                {
                    items: {
                        billing_thresholds?: object
                        price?: string
                        price_data?: object
                        quantity?: number
                        tax_rates?: [string]
                    }
                    add_invoice_items?: [
                        {
                            price?: string
                            price_data?: object
                            quantity?: number
                            tax_rates?: [string]
                        }
                    ]
                    application_fee_percent?: number
                    billing_cycle_anchor?: string
                    billing_thresholds?: object
                    collection_method?: string
                    coupon?: string
                    default_payment_method?: string
                    default_tax_rates?: [string]
                    end_date?: number
                    invoice_settings?: object
                    iterations?: number
                    proration_behavior?: string
                    transfer_data?: object
                    trial?: boolean
                    trial_end?: number
                }
            ]
            start_date?: number
            dafault_settings?: {
                application_fee_percent?: number
                billing_cycle_anchor?: string
                billing_thresholds?: {
                    amount_gte?: string
                    reset_billing_cycle_anchor?: string
                }
                collection_method?: string
                default_payment_method?: string
                invoice_settings?: {
                    days_until_due?: number
                }
                transfer_data?: {
                    destination: string
                    amount_percent?: number
                }
            }
            end_behavior?: unknown
            from_subscriptions?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            customer?: string
            metadata?: object
            phases?: [
                {
                    items: {
                        billing_thresholds?: object
                        price?: string
                        price_data?: object
                        quantity?: number
                        tax_rates?: [string]
                    }
                    add_invoice_items?: [
                        {
                            price?: string
                            price_data?: object
                            quantity?: number
                            tax_rates?: [string]
                        }
                    ]
                    application_fee_percent?: number
                    billing_cycle_anchor?: string
                    billing_thresholds?: object
                    collection_method?: string
                    coupon?: string
                    default_payment_method?: string
                    default_tax_rates?: [string]
                    end_date?: number
                    invoice_settings?: object
                    iterations?: number
                    proration_behavior?: string
                    transfer_data?: object
                    trial?: boolean
                    trial_end?: number
                }
            ]
            dafault_settings?: object
            end_behavior?: string
            proration_behavior?: string
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_items/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        params: {
            invoice_now?: boolean
            prorate?: boolean
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/cancel`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function release(
        id: string,
        params: {
            preserve_cancel_date?: unknown
        },
        stripeAccount?: string,
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/release`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            customer?: string
            canceled_at?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            completed_at?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            released_at?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            scheduled?: boolean
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [SubscriptionSchedulesResponse]
    }> {
        return client(
            `/subscription_schedules?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
