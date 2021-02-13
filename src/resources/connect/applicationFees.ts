export namespace accountLinks {
    export let client: Function

    export function retrieve(
        id: string, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees/${id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function list(
        params: {
            limit?: number,
            created?: object, //This needs to be looked in to
            ending_before?: string,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function createRefund(
        id: string,
        params: {
            amount?: number,
            metadata?: [string, unknown]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees/${id}/refunds`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveRefund(
        fee_id: string,
        refund_id: string,
        stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees/${fee_id}/refunds/${refund_id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function updateRefund(
        fee_id: string,
        refund_id: string,
        params: {
            metadata?: [string, unknown]
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees/${fee_id}/refunds/${refund_id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listRefunds(
        id: string,
        params: {
            limit?: number,
            ending_before?: string,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/application_fees/${id}/refunds?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }
}