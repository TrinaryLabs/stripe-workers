import qs from 'qs'
import {
    AuthorizationsResponse,
    CardholdersResponse,
    CardsResponse,
    DisputesResponse,
    TransactionsResponse,
} from '../../types'
import { returnToHeaders } from '../../util'
export namespace issuing {
    export let client: Function
    export namespace authorizations {
        export function retrieve(
            id: string,
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<AuthorizationsResponse> {
            return client(`/issuing/authorizations/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<AuthorizationsResponse> {
            return client(`/issuing/authorizations/${id}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function approve(
            id: string,
            params: {
                amount?: number
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<AuthorizationsResponse> {
            return client(
                `/issuing/authorizations/${id}/approve`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }

        export function decline(
            id: string,
            params: {
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<AuthorizationsResponse> {
            return client(
                `/issuing/authorizations/${id}/decline`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }

        export function list(
            params?: {
                card?: string
                cardholder?: string
                status?: string
                created?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
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
                    headers: returnToHeaders(settings),
                },
            )
        }
    }

    export namespace cardholders {
        export function create(
            params: {
                billing: {
                    address: {
                        city: string
                        country: string
                        line1: string
                        postal_code: string
                        line2?: string
                        state?: string
                    }
                }
                name: string
                type: string
                email?: string
                metadata?: object
                phone_number?: string
                company?: {
                    tax_id?: string
                }
                individual?: {
                    first_name: string
                    last_name: string
                    dob?: {
                        day: number
                        month: number
                        year: number
                    }
                    verification?: {
                        back?: string
                        front?: string
                    }
                }
                spending_controls?: {
                    allowed_categories?: [string]
                    blocked_categories?: [string]
                    spending_limits?: [
                        {
                            amount: number
                            interval: string
                            categories?: [string]
                        },
                    ]
                    spending_limits_currency?: string
                }
                status?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<CardholdersResponse> {
            return client('/issuing/cardholders', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { stripeAccount?: string },
        ): Promise<CardholdersResponse> {
            return client(`/issuing/cardholders/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                billing?: {
                    address: {
                        city: string
                        country: string
                        line1: string
                        postal_code: string
                        line2?: string
                        state?: string
                    }
                }
                email?: string
                metadata?: object
                phone_number?: string
                company?: {
                    tax_id?: string
                }
                individual?: {
                    first_name: string
                    last_name: string
                    dob?: {
                        day: number
                        month: number
                        year: number
                    }
                    verification?: {
                        back?: string
                        front?: string
                    }
                }
                spending_controls?: {
                    allowed_categories?: [string]
                    blocked_categories?: [string]
                    spending_limits?: [
                        {
                            amount: number
                            interval: string
                            categories?: [string]
                        },
                    ]
                    spending_limits_currency?: string
                }
                status?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
            },
        ): Promise<CardholdersResponse> {
            return client(`/issuing/cardholders/${id}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                created?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                email?: string
                ending_before?: string
                limit?: number
                phone_number?: string
                starting_after?: string
                status?: string
                type?: string
            },
            settings?: { stripeAccount?: string },
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
                    headers: returnToHeaders(settings),
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
                metadata?: object
                status?: string
                replacement_for?: string
                replacement_reason?: string
                shipping?: {
                    address: {
                        city: string
                        country: string
                        line1: string
                        postal_code: string
                        line2?: string
                        state?: string
                    }
                    name: string
                    service?: string
                }
                spending_controls?: {
                    allowed_categories?: [string]
                    blocked_categories?: [string]
                    spending_limits?: [
                        {
                            amount: number
                            interval: string
                            categories?: [string]
                        },
                    ]
                }
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<CardsResponse> {
            return client('/issuing/cards', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<CardsResponse> {
            return client(`/issuing/cards/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                cancellation_reason?: string
                metadata?: object
                status?: string
                spending_controls?: {
                    allowed_categories?: [string]
                    blocked_categories?: [string]
                    spending_limits?: [
                        {
                            amount: number
                            interval: string
                            categories?: [string]
                        },
                    ]
                    spending_limits_currency?: string
                }
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<CardsResponse> {
            return client(`/issuing/cards/${id}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                cardholder?: string
                type?: string
                created?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                ending_before?: string
                exp_month?: number
                exp_year?: number
                last4?: number
                limit?: number
                starting_after?: string
                status?: string
            },
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [CardsResponse]
        }> {
            return client(`/issuing/cards?${qs.stringify(params)}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }
    }

    export namespace disputes {
        export function create(
            params: {
                transaction: string
                evidence?: {
                    canceled?: {
                        additional_documentation?: string
                        canceled_at?: number
                        cancellation_policy_provided?: string
                        cancellation_reason?: string
                        explanation?: string
                        product_description?: string
                        product_type?: string
                        return_status?: string
                        returned_at?: number
                    }
                    duplicate?: {
                        additional_documentation?: string
                        card_statement?: string
                        cash_receipt?: string
                        check_image?: string
                        explanation?: string
                        original_transaction?: string
                    }
                    fraudulent?: {
                        additional_documentation?: string
                        explanation?: string
                    }
                    merchandise_not_as_described?: {
                        additional_documentation?: string
                        explanation?: string
                        received_at?: number
                        return_description?: string
                        return_status?: string
                        returned_at?: number
                    }
                    not_received?: {
                        additional_documentation?: string
                        expected_at?: number
                        explanation?: string
                        product_description?: string
                        product_type?: string
                    }
                    other?: {
                        additional_documentation?: string
                        explanation?: string
                        product_description?: string
                        product_type?: string
                    }
                    reason?: string
                    service_not_as_described?: {
                        additional_documentation?: string
                        canceled_at?: number
                        cancellation_reason?: string
                        explanation?: string
                        received_at?: number
                    }
                }
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<DisputesResponse> {
            return client('/issuing/disputes', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function submit(
            id: string,
            params: {
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}/submit`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function retrieve(
            id: string,
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                evidence?: {
                    canceled?: {
                        additional_documentation?: string
                        canceled_at?: number
                        cancellation_policy_provided?: string
                        cancellation_reason?: string
                        explanation?: string
                        product_description?: string
                        product_type?: string
                        return_status?: string
                        returned_at?: number
                    }
                    duplicate?: {
                        additional_documentation?: string
                        card_statement?: string
                        cash_receipt?: string
                        check_image?: string
                        explanation?: string
                        original_transaction?: string
                    }
                    fraudulent?: {
                        additional_documentation?: string
                        explanation?: string
                    }
                    merchandise_not_as_described?: {
                        additional_documentation?: string
                        explanation?: string
                        received_at?: number
                        return_description?: string
                        return_status?: string
                        returned_at?: number
                    }
                    not_received?: {
                        additional_documentation?: string
                        expected_at?: number
                        explanation?: string
                        product_description?: string
                        product_type?: string
                    }
                    other?: {
                        additional_documentation?: string
                        explanation?: string
                        product_description?: string
                        product_type?: string
                    }
                    reason?: string
                    service_not_as_described?: {
                        additional_documentation?: string
                        canceled_at?: number
                        cancellation_reason?: string
                        explanation?: string
                        received_at?: number
                    }
                }
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<DisputesResponse> {
            return client(`/issuing/disputes/${id}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                transaction?: string
                created?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                ending_before?: string
                limit?: number
                starting_after?: string
                status?: string
            },
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
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
                    headers: returnToHeaders(settings),
                },
            )
        }
    }

    export namespace transactions {
        export function retrieve(
            id: string,
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
        ): Promise<TransactionsResponse> {
            return client(`/issuing/transactions/${id}`, {}, 'GET', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                metadata?: object
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: [string]
            },
        ): Promise<TransactionsResponse> {
            return client(`/issuing/transactions/${id}`, params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function list(
            params?: {
                card?: string
                cardholder?: string
                created?: {
                    gt?: string
                    gte?: string
                    lt?: string
                    lte?: string
                }
                ending_before?: string
                limit?: number
                starting_after?: string
                type?: string
            },
            settings?: { 
                stripeAccount?: string
                expand?: [string]
            },
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
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
}
