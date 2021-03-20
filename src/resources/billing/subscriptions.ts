import qs from 'qs'

type SubscriptionResponse = {
    id: string,
    object: string,
    application_fee_percent: unknown,
    billing_cycle_anchor: number,
    billing_thresholds: unknown,
    cancel_at: unknown,
    cancel_at_period_end: boolean,
    canceled_at: unknown,
    collection_method: string,
    created: number,
    current_period_end: number,
    current_period_start: number,
    customer: string,
    days_until_due: unknown,
    default_payment_method: unknown,
    default_source: unknown,
    default_tax_rates: [unknown],
    discount: unknown,
    ended_at: unknown,
    items: {
      object: string,
      data: [
        object
      ],
      has_more: boolean,
      url: string
    },
    latest_invoice: string,
    livemode: boolean,
    metadata: object,
    next_pending_invoice_item_invoice: unknown,
    pause_collection: object
    pending_invoice_item_interval: unknown,
    pending_setup_intent: unknown,
    pending_update: unknown,
    schedule: unknown,
    start_date: number,
    status: string,
    transfer_data: unknown,
    trial_end: unknown,
    trial_start: unknown
}

export namespace subscriptions {
    export let client: Function

    export function create(
        params: {
            customer: string
            items: object
            cancel_at_period_end?: boolean
            default_payment_method?: unknown
            metadata?: [string, unknown]
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
            metadata?: [string, unknown]
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
        params: {
            customer?: string
            price?: string
            status?: string
            collection_method?: unknown
            created?: object
            current_period_end?: object
            current_period_start?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string,
        url: string,
        has_more: boolean,
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
        object: string,
        deleted: boolean
      }> {
        return client(`/subscriptions/${id}/discount`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
