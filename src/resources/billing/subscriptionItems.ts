export namespace subscriptionItems {
    export let client: Function

    export function create(
        params: {
            subscription: string, 
            metadata?: [string, unknown],
            price?: string,
            proration_behavior?: unknown,
            quantity?: number,
            billing_thresholds?: object,
            payment_behavior?: string,
            price_data?: object,
            proration_date?: number,
            tax_rates?: string[]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items/${id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function update(
        id: string,
        params: {
            metadata?: [string, unknown],
            price?: string,
            proration_behavior?: unknown,
            quantity?: number,
            billing_thresholds?: object,
            off_session?: unknown,
            payment_behavior?: string,
            price_data?: object,
            proration_date?: number,
            tax_rates?: string[]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items/${id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function del(
        id: string,
        params: {
            clear_usage?: unknown,
            proration_date?: unknown
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items/${id}`, params, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function list(
        params: {
            subscription?: string,
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items?subscription=${params.subscription}&limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function createUsageRecord(
        id: string,
        params: {
            quantity: number,
            timestmap: number,
            action?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items/${id}/usage_records`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listUsageRecordSummaries(
        id: string,
        params: {
            ending_before?: string,
            limit?: number,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/subscription_items/${id}/usage_record_summaries?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }
}