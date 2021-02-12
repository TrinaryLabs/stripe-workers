export namespace customers {
    export let client: Function

    export function create(
        params: {
            test: unknown
        }
    ) : Promise<unknown> {
        return client('/customers', params, 'POST')
    }

    export function update(
        id: string,
        params: {
            test: unknown
        }
    ) : Promise<unknown> {
        return client(`/custoemrs/${id}`, params, 'POST')
    }

    export function del(id: string) : Promise<unknown> {
        return client(`/customers/${id}`, {}, 'DELETE')
    }

    export function list(params: unknown) : Promise<unknown> {
        return client(`/customers/`, {}, 'GET')
    }
}
