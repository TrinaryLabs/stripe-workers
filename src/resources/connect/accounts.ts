export namespace accounts {
    export let client: Function

    export function create(
        params: {
            type: string,
            country?: string,
            email: string,
            capabilities?: object,
            business_type?: string,
            company?: object,
            individual?: object,
            metadata?: [string, unknown],
            tos_acceptance?: object,
            account_token?: unknown,
            business_profile?: object, 
            default_currency?: string,
            documents?: object,
            external_account?: object,
            settings?: object 
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client('/accounts', params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieve(id: string, stripeAccount?: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function update(id: string, 
        params: {
            type: string,
            country?: string,
            email: string,
            capabilities?: object,
            business_type?: string,
            company?: object,
            individual?: object,
            metadata?: [string, unknown],
            tos_acceptance?: object,
            account_token?: unknown,
            business_profile?: object, 
            default_currency?: string,
            documents?: object,
            external_account?: object,
            settings?: object 
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/accounts/${id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function del(id: string, stripeAccount?: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'DELETE', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function reject(id: string, params: { reason: string }, stripeAccount?: string,) : Promise<unknown> {
        return client(`/accounts/${id}/reject`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function list(
        params: {
            created?: unknown,
            limit?: number
            ending_before?: string,
            starting_after?: string
        }, stripeAccount?: string,
    ) : Promise<unknown> {
        return client(`/accounts`, params, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function createLoginLink(id: string, stripeAccount?: string) : Promise<unknown> {
        return client(`/accounts/${id}/login_links`, {}, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function retrieveCapability(
        user_id: string,
        cap_id: string,
        stripeAccount?: string
    ) : Promise<unknown> {
        return client(`/accounts/${user_id}/capabilities/${cap_id}`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function updateCapability(
        user_id: string,
        cap_id: string,
        params: {
            requested?: boolean
        }, stripeAccount?: string
    ) : Promise<unknown> {
        return client(`/accounts/${user_id}/capabilities/${cap_id}`, params, 'POST', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }

    export function listCapabilities(
        user_id: string,
        stripeAccount?: string
    ) : Promise<unknown> {
        return client(`/accounts/${user_id}/capabilities`, {}, 'GET', stripeAccount
        ? { 'Stripe-Account': stripeAccount }
        : {},)
    }
}
