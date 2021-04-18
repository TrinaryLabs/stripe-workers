import qs from 'qs'
import { AuthorizationsResponse, CardholdersResponse, CardsResponse, DisputesResponse, TransactionsResponse } from '../../types'
export namespace issuing {
    export let client: Function
    export namespace authorizations {

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<AuthorizationsResponse> {
            return client(`/issuing/authorizations/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<AuthorizationsResponse> {
            return client(`/issuing/authorizations/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function approve(
            id: string,
            params: {
                amount?: number
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<AuthorizationsResponse> {
            return client(
                `/issuing/authorizations/${id}/approve`,
                params,
                'POST',
                {
                    headers: stripeAccount
                        ? { 'Stripe-Account': stripeAccount }
                        : {},
                },
            )
        }

        export function decline(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<AuthorizationsResponse> {
            return client(
                `/issuing/authorizations/${id}/decline`,
                params,
                'POST',
                {
                    headers: stripeAccount
                        ? { 'Stripe-Account': stripeAccount }
                        : {},
                },
            )
        }

        export function list(
            params?: {
                card?: string
                cardholder?: string
                status?: string
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
            data: [AuthorizationsResponse]
        }> {
            return client(
                `/issuing/authorizations?${qs.stringify(params)}`,
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

    export namespace cardholders {

        export function create(
            params: {
                billing: object
                name: string
                type: string
                email?: string
                metadata?: [string, unknown]
                phone_number?: string
                company?: object
                individual?: object
                spending_controls?: object
                status?: string
            },
            stripeAccount?: string,
        ): Promise<CardholdersResponse> {
            return client('/issuing/cardholders', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<CardholdersResponse> {
            return client(`/issuing/cardholders/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                billing: object
                email?: string
                metadata?: [string, unknown]
                phone_number?: string
                company?: object
                individual?: object
                spending_controls?: object
                status?: string
            },
            stripeAccount?: string,
        ): Promise<CardholdersResponse> {
            return client(`/issuing/cardholders/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params?: {
                created?: object
                email?: string
                ending_before?: string
                limit?: number
                phone_number?: string
                starting_after?: string
                status?: string
                type?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CardholdersResponse]
        }> {
            return client(
                `/issuing/cardholders?${qs.stringify(params)}`,
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

    export namespace cards {

        export function create(
            params: {
                cardholder: string
                currency: string
                type: string
                metadata?: [string, unknown]
                status?: string
                replacement_for?: unknown
                replacement_reason?: string
                shipping?: object
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<CardsResponse> {
            return client('/issuing/cards', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<CardsResponse> {
            return client(`/issuing/cards/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                cancellation_reason?: string
                metadata?: [string, unknown]
                status?: string
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<CardsResponse> {
            return client(`/issuing/cards/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params?: {
                cardholder?: string
                type?: string
                created?: object
                ending_before?: string
                exp_month?: number
                exp_year?: number
                last4?: number
                limit?: number
                starting_after?: string
                status?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CardsResponse]
        }> {
            return client(`/issuing/cards?${qs.stringify(params)}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }
    }

    export namespace disputes {

        export function create(
            params: {
                transaction: string
                evidence?: object
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<DisputesResponse> {
            return client('/issuing/disputes', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function submit(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}/submit`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                evidence?: object
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params?: {
                transaction?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
                status?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [DisputesResponse]
        }> {
            return client(
                `/issuing/disputes?${qs.stringify(params)}`,
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

    export namespace transactions {

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<TransactionsResponse> {
            return client(`/issuing/transactions/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<TransactionsResponse> {
            return client(`/issuing/transactions/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params?: {
                card?: string
                cardholder?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
                type?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [TransactionsResponse]
        }> {
            return client(
                `/issuing/transactions?${qs.stringify(params)}`,
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
}
