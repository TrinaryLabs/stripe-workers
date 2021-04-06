import qs from 'qs'

type ApplicationFeesResponse = {
    id: string
    object: string
    account: string
    amount: number
    amount_refunded: number
    application: string
    balance_transaction: string
    charge: string
    created: number
    currency: string
    livemode: boolean
    originating_transaction: string
    refunded: boolean
    refunds: {
        object: string
        data: [
            {
                id: string
                object: string
                amount: number
                balance_transaction: string
                created: number
                currency: string
                fee: string
                metadata: object
            }
        ]
        has_more: boolean
        url: string
    }
}

type ApplicationFeesRefundResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: string
    created: number
    currency: string
    fee: string
    metadata: object
}

export namespace applicationFees {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesResponse> {
        return client(`/application_fees/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            limit?: number
            created?: object
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesResponse]
    }> {
        return client(`/application_fees?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createRefund(
        id: string,
        params: {
            amount?: number
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(`/application_fees/${id}/refunds`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveRefund(
        fee_id: string,
        refund_id: string,
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function updateRefund(
        fee_id: string,
        refund_id: string,
        params: {
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<ApplicationFeesRefundResponse> {
        return client(
            `/application_fees/${fee_id}/refunds/${refund_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listRefunds(
        id: string,
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [ApplicationFeesRefundResponse]
    }> {
        return client(
            `/application_fees/${id}/refunds?${qs.stringify(params)}`,
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
