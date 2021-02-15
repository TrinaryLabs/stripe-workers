export namespace taxRates {
    export let client: Function

    export function create(
        params: {
            display_name: string,
            inclusive: boolean,
            percentage: number,
            active?: boolean,
            country?: string,
            description?: string,
            jurisdiction?: string,
            metadata?: [string, unknown],
            state?: string
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            '/tax_rates',
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string) : Promise<unknown> {
        return client(
            `/tax_rates/${id}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function update(
        id: string,
        params: {
            display_name: string,
            active?: boolean,
            country?: string,
            description?: string,
            jurisdiction?: string,
            metadata?: [string, unknown],
            state?: string
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/tax_rates/${id}`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function list(
        params: {
            active?: boolean,
            created?: string,
            ending_before?: string,
            inclusive?: boolean,
            limit?: number,
            starting_after?: string,
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/tax_rates?active=${params.active}&limit=${params.limit}&inclusive=${params.inclusive}&created=${params.created}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
}
