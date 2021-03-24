import qs from 'qs'

type PaymentIntentsResponse = {
    id: string
    object: string
    amount: number
    amount_capturable: number
    amount_received: number
    application: unknown
    application_fee_amount: unknown
    canceled_at: unknown
    cancellation_reason: unknown
    capture_method: string
    charges: object
    client_secret: string
    confirmation_method: string
    created: number
    currency: string
    customer: unknown
    description: string
    invoice: unknown
    last_payment_error: unknown
    livemode: boolean
    metadata: object
    next_action: unknown
    on_behalf_of: unknown
    payment_method: unknown
    payment_method_options: object
    payment_method_types: [string]
    receipt_email: unknown
    review: unknown
    setup_future_usage: unknown
    shipping: unknown
    statement_descriptor: unknown
    statement_descriptor_suffix: unknown
    status: string
    transfer_data: unknown
    transfer_group: unknown
}

export namespace paymentIntents {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client('/payment_intents', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret?: string
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(
            `/payment_intents/${id}?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function update(
        id: string,
        params: {
            amount?: number
            currency?: string
            confirm?: boolean
            customer?: string
            description?: string
            metadata?: [string, unknown]
            off_session?: boolean
            payment_method?: string
            payment_method_types?: string[]
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture_method?: unknown
            confirmation_method?: unknown
            error_on_requires_action?: unknown
            mandate?: unknown
            mandate_data?: unknown
            on_behalf_of?: unknown
            payment_method_data?: unknown
            payment_method_options?: unknown
            return_url?: string
            transfer_data?: unknown
            transfer_group?: unknown
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function confirm(
        id: string,
        params: {
            payment_method?: unknown
            receipt_email?: string
            setup_future_usage?: string
            shipping?: object
            error_on_requires_action?: unknown
            mandate?: string
            mandate_data?: object
            off_session?: unknown
            payment_method_data?: object
            payment_method_options?: object
            payment_method_types?: string[]
            return_url?: string
            use_stripe_sdk?: unknown
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function capture(
        id: string,
        params: {
            amount_to_capture?: number
            application_fee_amount?: number
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            transfer_data?: object
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/capture`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function cancel(
        id: string,
        params: {
            cancellation_reason?: string
        },
        stripeAccount?: string,
    ): Promise<PaymentIntentsResponse> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer?: string
            created?: object
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PaymentIntentsResponse]
    }> {
        return client(
            `/payment_intents?${qs.stringify(params)}`,
            params,
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}