import qs from 'qs'

export namespace skus {
    export let client: Function

    export function create(
        params: {
            id?: string
            currency: string
            inventory: object
            price: number
            product: string
            active?: boolean
            attributes?: object
            image?: string
            metadata?: [string, unknown]
            package_dimensions?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            '/skus',
            params,
            'POST',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/skus/${id}`,
            {},
            'GET',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function update(
        id: string,
        params: {
            currency: string
            inventory: object
            price: number
            product: string
            active?: boolean
            attributes?: object
            image?: string
            metadata?: [string, unknown]
            package_dimensions?: object
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/skus/${id}`,
            params,
            'POST',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function list(
        params: {
            active?: boolean
            product?: string
            attributes?: object
            ending_before?: string
            ids?: string[]
            in_stock?: boolean
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown> {
        return client(
            `/skus?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }

    export function del(id: string, stripeAccount?: string): Promise<unknown> {
        return client(
            `/skus/${id}`,
            {},
            'DELETE',
            {
                headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
            }
        )
    }
}
