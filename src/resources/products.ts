import qs from 'qs'

export namespace products {
    export let client: Function

    export function create(
        params: {
            id?: string
            name: string
            active?: boolean
            description?: string
            metadata?: [string, unknown]
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: object
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/products',
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
            `/products/${id}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function update(
        id: string,
        params: {
            active?: boolean
            description?: string
            metadata?: [string, unknown]
            name?: string
            attributes?: string[]
            caption?: string
            deactivate_on?: string[]
            images?: string[]
            package_dimensions?: object
            shippable?: boolean
            statement_descriptor?: string
            unit_label?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/products/${id}`,
            params,
            'POST',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function list(
        params: {
            active?: boolean
            created?: object
            ending_before?: string
            ids?: string[]
            limit?: number
            shippable?: boolean
            starting_after?: string
            url?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/products?${qs.stringify(params)}`,
            {},
            'GET',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }

    export function del(id: string, stripeAccount?: string): Promise<unknown> {
        return client(
            `/products/${id}`,
            {},
            'DELETE',
            stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        )
    }
}
