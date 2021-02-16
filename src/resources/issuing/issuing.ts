import qs from 'qs'

export namespace issuing {
    export namespace authorizations {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/authorizations/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function update(
            id: string,
            params: {
                metadata?: [string, unknown] 
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/authorizations/${id}`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function approve(
            id: string,
            params: {
                amount?: number,
                metadata?: [string, unknown] 
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/authorizations/${id}/approve`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function decline(
            id: string,
            params: {
                metadata?: [string, unknown] 
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/authorizations/${id}/decline`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                card?: string,
                cardholder?: string,
                status?: string,
                created?: object,
                ending_before?: string,
                limit?: number,
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/authorizations?${qs.stringify(params)}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }

    export namespace cardholders {
        export let client: Function

        export function create(
            params: {
                billing: object,
                name: string,
                type: string,
                email?: string,
                metadata?: [string, unknown],
                phone_number?: string,
                company?: object,
                individual?: object,
                spending_controls?: object,
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                '/issuing/cardholders',
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
                `/issuing/cardholders/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function update(
            id: string,
            params: {
                billing: object,
                email?: string,
                metadata?: [string, unknown],
                phone_number?: string,
                company?: object,
                individual?: object,
                spending_controls?: object,
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/cardholders/${id}`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                created?: object,
                email?: string,
                ending_before?: string,
                limit?: number,
                phone_number?: string,
                starting_after?: string,
                status?: string,
                type?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/cardholders?${qs.stringify(params)}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }

    export namespace cards {
        export let client: Function

        export function create(
            params: {
                cardholder: string,
                currency: string,
                type: string,
                metadata?: [string, unknown],
                status?: string,
                replacement_for?: unknown,
                replacement_reason?: string,
                shipping?: object,
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                '/issuing/cards',
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
                `/issuing/cards/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function update(
            id: string,
            params: {
                cancellation_reason?: string,
                metadata?: [string, unknown],
                status?: string,
                spending_controls?: object
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/cards/${id}`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                cardholder?: string,
                type?: string,
                created?: object,
                ending_before?: string,
                exp_month?: number,
                exp_year?: number,
                last4?: number,
                limit?: number,
                starting_after?: string,
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/cards?${qs.stringify(params)}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }

    export namespace disputes {
        export let client: Function

        export function create(
            params: {
                transaction: string,
                evidence?: object,
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                '/issuing/disputes',
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function submit(
            id: string,
            params: {
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/disputes/${id}/submit`,
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
                `/issuing/disputes/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function update(
            id: string,
            params: {
                evidence?: object,
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/disputes/${id}`,
                params,
                'POST',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                transaction?: string,
                created?: object,
                ending_before?: string,
                limit?: number,
                starting_after?: string,
                status?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/issuing/disputes?${qs.stringify(params)}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }
}
