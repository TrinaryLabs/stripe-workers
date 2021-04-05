import qs from 'qs'

type ChargesResponse = {
    id: string
    object: string
    amount: number
    amount_captured: number
    amount_refunded: number
    application: string
    application_fee: string
    application_fee_amount: number
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
    calculated_statement_descriptor: string
    captured: boolean
    created: number
    currency: string
    customer: string
    description: string
    disputed: boolean
    failure_code: string
    failure_message: string
    fraud_details: object
    invoice: string
    livemode: boolean
    metadata: object
    on_behalf_of: string
    order: string
    outcome: {
        network_status: string
        reason: string
        risk_level: string
        risk_score: number
        rule: string
        seller_message: string
        type: string
    }
    paid: boolean
    payment_intent: string
    payment_method: string
    payment_method_details: object
    receipt_email: string
    receipt_number: string
    receipt_url: string
    refunded: boolean
    refunds: object
    review: string
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    source_transfer: string
    statement_descriptor: string
    statement_descriptor_suffix: string
    status: string
    transfer_data: {
        amount: number
        destination: string
    }
    transfer_group: string
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
