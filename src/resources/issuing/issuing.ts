import qs from 'qs'

type BalanceTransactionsResponse = {
    id: string
    object: string
    amount: number
    available_on: number
    created: number
    currency: string
    description: unknown
    exchange_rate: number
    fee: number
    fee_details: [
        {
            amount: number
            application: unknown
            currency: string
            description: string
            type: string
        },
    ]
    net: number
    reporting_category: string
    source: string
    status: string
    type: string
}

type AuthorizationsResponse = {
    id: string
    amount: number
    approved: boolean
    card: CardsResponse
    cardholder: string
    currency: string
    metadata: object
    status: string
    object: string
    amount_details: {
        atm_fee: number
    }
    authorization_method: string
    balance_transactions: [BalanceTransactionsResponse]
    created: number
    livemode: boolean
    merchant_amount: number
    merchant_currency: string
    merchant_data: {
        category: string
        city: string
        country: string
        name: string
        network_id: string
        postal_code: string
        state: string
    }
    pending_request: {
        amount: number
        amount_details: {
            atm_fee: number
        }
        currency: string
        is_amount_controllable: boolean
        merchant_amount: number
        merchant_currency: string
    }
    request_history: [
        {
            amount: number
            amount_details: {
                atm_fee: number
            }
            approved: boolean
            created: number
            currency: string
            merchant_amount: number
            merchant_currency: string
            reason: string
        },
    ]
    transactions: [TransactionsResponse]
    verification_data: {
        address_line1_check: string
        address_postal_code_check: string
        cvc_check: string
        expiry_check: string
    }
    wallet: string
}

type CardholdersResponse = {
    id: string
    billing: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
    }
    email: string
    metadata: object
    name: string
    phone_number: string
    type: string
    object: string
    company: {
        tax_id_provided: boolean
    }
    created: number
    individual: {
        dod: {
            day: number
            month: number
            year: number
        }
        first_name: string
        last_name: string
        verification: {
            document: {
                back: string
                front: string
            }
        }
    }
    livemode: boolean
    requirements: {
        disabled_reason: string
        past_due: [string]
    }
    spending_controls: {
        allowed_categories: [string]
        blocked_categories: [string]
        spending_limits: [
            {
                amount: number
                categories: [string]
                interval: string
            },
        ]
        spending_limits_currency: string
    }
    status: string
}

type CardsResponse = {
    id: string
    cancellation_reason: string
    cardholder: CardholdersResponse
    currency: string
    exp_month: number
    exp_year: number
    last4: string
    metadata: object
    status: string
    type: string
    object: string
    brand: string
    created: number
    cvc: string
    livemode: boolean
    number: string
    replaced_by: string
    replacement_for: string
    replacement_reason: string
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
        eta: number
        name: string
        service: string
        status: string
        tracking_number: string
        tracking_url: string
        type: string
    }
    spending_controls: {
        allowed_categories: [string]
        blocked_categories: [string]
        spending_limits: [
            {
                amount: number
                categories: [string]
                interval: string
            },
        ]
        spending_limits_currency: string
    }
}

type DisputesResponse = {
    id: string
    amount: number
    balance_transactions: [BalanceTransactionsResponse]
    currency: string
    evidence: {
        canceled: {
            additional_documentation: string
            canceled_at: number
            cancellation_policy_provided: boolean
            cancellation_reason: string
            expected_at: number
            explanation: string
            product_description: string
            product_type: string
            return_status: string
            returned_at: number
        }
        duplicate: {
            additional_documentation: string
            card_statement: string
            cash_receipt: string
            check_image: string
            explanation: string
            original_transaction: string
        }
        fraudulent: {
            additional_documentation: string
            explanation: string
        }
        merchandise_not_as_described: {
            additional_documentation: string
            explanation: string
            received_at: number
            return_description: string
            return_status: string
            returned_at: number
        }
        not_received: {
            additional_documentation: string
            expected_at: number
            explanation: string
            product_description: string
            product_type: string
        }
        other: {
            additional_documentation: string
            explanation: string
            product_description: string
            product_type: string
        }
        reason: string
        service_not_as_described: {
            additional_documentation: string
            canceled_at: number
            cancellation_reason: string
            explanation: string
            received_at: number
        }
    }
    metadata: object
    status: string
    transaction: string
    object: string
    created: number
    livemode: boolean
}

type TransactionsResponse = {
    id: string
    amount: number
    authorization: string
    card: string
    cardholder: string
    currency: string
    metadata: object
    type: string
    object: string
    amount_details: {
        atm_fee: number
    }
    balance_transaction: string
    created: number
    dispute: string
    livemode: boolean
    merchant_amount: number
    merchant_currency: string
    merchant_data: {
        category: string
        city: string
        country: string
        name: string
        network_id: string
        postal_code: string
        state: string
    }
    purchase_details: {
        flight: {
            departure_at: number
            passenger_name: string
            refundable: boolean
            segments: {
                arrival_airport_code: string
                carrier: string
                departure_airport_code: string
                flight_number: string
                service_class: string
                stopover_allowed: boolean
            }
            travel_agency: string
        }
        fuel: {
            type: string
            unit: string
            unit_cost_decimal: string
            volume_decimal: string
        }
        lodging: {
            check_in_at: number
            nights: number
        }
        receipt: {
            description: string
            quantity: number
            total: number
            unit_cost: number
        }
        reference: string
    }
}

export namespace issuing {
    export namespace authorizations {
        export let client: Function

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
            params: {
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
        export let client: Function

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
            params: {
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
        export let client: Function

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
            params: {
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
        export let client: Function

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
            params: {
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
        export let client: Function

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
            params: {
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
