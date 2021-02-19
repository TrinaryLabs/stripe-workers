import qs from 'qs'

export namespace charges {
    export let client: Function

    export function create(
        params: {
            amount: number,
            currency: string,
            customer?: string,
            description?: string,
            metadata?: [string, unknown],
            receipt_email?: string,
            shipping?: object,
            source?: unknown,
            statement_descriptor?: string,
            statement_descriptor_suffix?: string,
            application_fee_amount?: number,
            capture?: unknown,
            on_behalf_of?: unknown,
            transfer_data?: object,
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/charges`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/charges/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            customer?: string,
            description?: string,
            metadata?: [string, unknown],
            receipt_email?: string,
            shipping?: object,
            fraud_details?: object,
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/charges/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function capture(
        id: string,
        params: {
            amount?: number,
            receipt_email?: string,
            statement_descriptor?: string,
            statement_descriptor_suffix?: string,
            application_fee_amount?: number,
            transfer_data?: object,
            transfer_group?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/charges/${id}/capture`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            customer?: string,
            created?: object,
            ending_before?: string,
            limit?: number,
            payment_intent?: unknown,
            starting_after?: string,
            transfer_group?: unknown 
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/charges?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
