export namespace webhookEndpoints {
    export let client: Function

    export function create(
        params: {
            enabled_events: string[],
            url: string,
            api_version?: string,
            description?: string,
            metadata?: [string, unknown],
            connect?: boolean
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            '/webhook_endpoints',
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
            `/webhook_endpoints/${id}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function update(
        id: string,
        params: {
            enabled_events: string[],
            url: string,
            description?: string,
            metadata?: [string, unknown],
            disabled?: boolean
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/webhook_endpoints/${id}`,
            params,
            'POST', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function list(
        params: {
            ending_before?: string,
            limit?: number,
            starting_after?: string 
        }, stripeAccount?: string) : Promise<unknown> {
        return client(
            `/webhook_endpoints?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
            {},
            'GET', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }

    export function del(
        id: string,
        stripeAccount?: string) : Promise<unknown> {
        return client(
            `/webhook_endpoints/${id}`,
            {},
            'DELETE', stripeAccount
            ? { 'Stripe-Account': stripeAccount }
            : {},
        )
    }
    
}