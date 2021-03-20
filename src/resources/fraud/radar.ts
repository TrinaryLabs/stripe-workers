import qs from 'qs'

type EarlyFraudWarningsResponse = {
    id: string
    object: string
    actionable: boolean
    charge: string
    created: number
    fraud_type: string
    livemode: boolean
}

type ValueListResponse = {
    id: string
    object: string
    alias: string
    created: number
    created_by: string
    item_type: string
    list_items: {
        object: string
        data: []
        has_more: boolean
        url: string
    }
    livemode: boolean
    metadata: object
    name: string
}

type ValueListItemsResponse = {
    id: string
    object: string
    created: number
    created_by: string
    livemode: boolean
    value: string
    value_list: string
}

export namespace radar {
    export namespace earlyFraudWarnings {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<EarlyFraudWarningsResponse> {
            return client(`/radar/early_fraud_warnings/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params: {
                charge?: string
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [EarlyFraudWarningsResponse]
        }> {
            return client(
                `/radar/early_fraud_warnings?${qs.stringify(params)}`,
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

    export namespace valueList {
        export let client: Function

        export function create(
            params: {
                alias: string
                name: string
                item_type?: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<ValueListResponse> {
            return client(`/radar/value_lists`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ValueListResponse> {
            return client(`/radar/value_lists/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function update(
            id: string,
            params: {
                alias?: string
                name?: string
                metadata?: [string, unknown]
            },
            stripeAccount?: string,
        ): Promise<ValueListResponse> {
            return client(`/radar/value_lists/${id}`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function del(
            id: string,
            stripeAccount?: string,
        ): Promise<{
            id: string
            object: string
            deleted: boolean
        }> {
            return client(`/radar/value_lists/${id}`, {}, 'DELETE', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params: {
                alias?: string
                contains?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ValueListResponse]
        }> {
            return client(
                `/radar/value_lists?${qs.stringify(params)}`,
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

    export namespace valueListItems {
        export let client: Function

        export function create(
            params: {
                value: string
                value_list: string
            },
            stripeAccount?: string,
        ): Promise<ValueListItemsResponse> {
            return client(`/radar/value_list_items`, params, 'POST', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<ValueListItemsResponse> {
            return client(`/radar/value_list_items/${id}`, {}, 'GET', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function del(
            id: string,
            stripeAccount?: string,
        ): Promise<{
            id: string
            object: string
            deleted: boolean
        }> {
            return client(`/radar/value_list_items/${id}`, {}, 'DELETE', {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            })
        }

        export function list(
            params: {
                value_list: string
                value?: string
                created?: object
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [ValueListItemsResponse]
        }> {
            return client(
                `/radar/value_list_items?${qs.stringify(params)}`,
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
