import qs from 'qs'
import { SubscriptionSchedulesResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace subscriptionSchedules {
    export let client: Function

    export function create(
        params: {
            customer?: string
            metadata?: object
            phases?: [
                {
                    items: [
                        {
                            billing_thresholds?: {
                                usage_gte: number
                            }
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
                        },
                    ]
                    add_invoice_items?: [
                        {
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
                        },
                    ]
                    application_fee_percent?: number
                    billing_cycle_anchor?: string
                    billing_thresholds?: {
                        amount_gte?: number
                        reset_billing_cycle_anchor?: string
                    }
                    collection_method?: string
                    coupon?: string
                    default_payment_method?: string
                    default_tax_rates?: [string]
                    end_date?: number
                    invoice_settings?: {
                        days_until_due?: number
                    }
                    iterations?: number
                    proration_behavior?: string
                    transfer_data?: {
                        destination: string
                        amount_percent?: number
                    }
                    trial?: boolean
                    trial_end?: number
                },
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
            end_behavior?: string
            from_subscriptions?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
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
                        billing_thresholds?: {
                            usage_gte: number
                        }
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
                    add_invoice_items?: [
                        {
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
                        },
                    ]
                    application_fee_percent?: number
                    billing_cycle_anchor?: string
                    billing_thresholds?: {
                        amount_gte?: number
                        reset_billing_cycle_anchor?: string
                    }
                    collection_method?: string
                    coupon?: string
                    default_payment_method?: string
                    default_tax_rates?: [string]
                    end_date?: number
                    invoice_settings?: {
                        days_until_due?: number
                    }
                    iterations?: number
                    proration_behavior?: string
                    transfer_data?: {
                        destination: string
                        amount_percent?: number
                    }
                    trial?: boolean
                    trial_end?: number
                },
            ]
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
            end_behavior?: string
            proration_behavior?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_items/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function cancel(
        id: string,
        params: {
            invoice_now?: boolean
            prorate?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/cancel`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function release(
        id: string,
        params?: {
            preserve_cancel_date?: boolean
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<SubscriptionSchedulesResponse> {
        return client(`/subscription_schedules/${id}/release`, params, 'POST', {
            headers: returnToHeaders(settings),
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
        settings?: { stripeAccount?: string },
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
                headers: returnToHeaders(settings),
            },
        )
    }
}
