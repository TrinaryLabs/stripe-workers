import qs from 'qs'

export namespace terminal {
    export namespace connectionTokens {
        export let client: Function

        export function create(
            params: {
                location?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client('/terminal/connection_tokens', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }
    }

    export namespace locations {
        export let client: Function

        export function create(
            params: {
                address: object
                display_name: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client('/terminal/locactions', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/locactions/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                address?: object
                display_name?: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/locactions/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function del(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/locactions/${id}`, {}, 'DELETE', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/terminal/locactions?${qs.stringify(params)}`,
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

    export namespace readers {
        export let client: Function

        export function create(
            params: {
                registration_code?: string
                label?: string
                location?: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client('/terminal/readers', params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/readers/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                label?: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/readers/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function del(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(`/terminal/readers/${id}`, {}, 'DELETE', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params: {
                device_type?: string
                location?: string
                status?: string
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/terminal/readers?${qs.stringify(params)}`,
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
