import qs from 'qs'

type ChargesResponse = {
    id: string
    object: string
    amount: number
    amount_captured: number
    amount_refunded: number
    application: unknown
    application_fee: unknown
    application_fee_amount: unknown
    balance_transaction: string
    billing_details: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        email: string
        name: string
        phone: string
    }
    calculated_statement_descriptor: unknown
    captured: boolean
    created: number
    currency: string
    customer: unknown
    description: string
    disputed: boolean
    failure_code: unknown
    failure_message: unknown
    fraud_details: object
    invoice: unknown
    livemode: boolean
    metadata: object
    on_behalf_of: unknown
    order: unknown
    outcome: unknown
    paid: boolean
    payment_intent: unknown
    payment_method: string
    payment_method_details: object
    receipt_email: string
    receipt_number: unknown
    receipt_url: string
    refunded: boolean
    refunds: object
    review: unknown
    shipping: unknown
    source_transfer: unknown
    statement_descriptor: unknown
    statement_descriptor_suffix: unknown
    status: string
    transfer_data: unknown
    transfer_group: unknown
    source: string
}

export namespace charges {
    export let client: Function

    export function create(
        params: {
            amount: number
            currency: string
            customer?: string
            description?: string
            metadata?: [string, unknown]
            receipt_email?: string
            shipping?: object
            source?: unknown
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            capture?: unknown
            on_behalf_of?: unknown
            transfer_data?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<ChargesResponse> {
        return client(`/charges`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            customer?: string
            description?: string
            metadata?: [string, unknown]
            receipt_email?: string
            shipping?: object
            fraud_details?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function capture(
        id: string,
        params: {
            amount?: number
            receipt_email?: string
            statement_descriptor?: string
            statement_descriptor_suffix?: string
            application_fee_amount?: number
            transfer_data?: object
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<ChargesResponse> {
        return client(`/charges/${id}/capture`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer?: string
            created?: object
            ending_before?: string
            limit?: number
            payment_intent?: unknown
            starting_after?: string
            transfer_group?: unknown
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ChargesResponse]
    }> {
        return client(`/charges?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
