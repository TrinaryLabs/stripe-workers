export namespace accounts {
    export let client: Function

    export function create(params: unknown) : Promise<unknown> {
        return client('/accounts', params, 'POST')
    }

    export function retrieve(id: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'GET')
    }

    export function update(id: string, params: unknown) : Promise<unknown> {
        return client(`/accounts/${id}`, params, 'POST')
    }

    export function del(id: string) : Promise<unknown> {
        return client(`/accounts/${id}`, {}, 'DELETE')
    }

    export function reject(id: string, params: unknown) : Promise<unknown> {
        return client(`/accounts/${id}/reject`, params, 'POST')
    }

    export function list(params: unknown) : Promise<unknown> {
        return client(`/accounts`, params, 'GET')
    }

    export function createLoginLink(id: string) : Promise<unknown> {
        return client(`/accounts/${id}/login_links`, {}, 'POST')
    }
}
