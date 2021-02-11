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
        }
    ) : Promise<unknown> {
        return client('/accounts', params, 'POST')
    }

    export function retrieve(id: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'GET')
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
        }
    ) : Promise<unknown> {
        return client(`/accounts/${id}`, params, 'POST')
    }

    export function del(id: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'DELETE')
    }

    export function reject(id: string, params: { reason: string }) : Promise<unknown> {
        return client(`/accounts/${id}/reject`, params, 'POST')
    }

    export function list(
        params: {
            created?: unknown,
            limit?: number
            ending_before?: string,
            starting_after?: string
        }
    ) : Promise<unknown> {
        return client(`/accounts`, params, 'GET')
    }

    export function createLoginLink(id: string) : Promise<unknown> {
        return client(`/accounts/${id}/login_links`, {}, 'POST')
    }
}
