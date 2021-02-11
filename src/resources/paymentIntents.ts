export namespace paymentIntents {
    export let client: Function

    export function create(
        params: {
            amount: number,
            currency: string,
            confirm?: boolean,
            customer?: string,
            description?: string,
            metadata?: [string, unknown], 
            off_session?: boolean,
            payment_method?: string,
            payment_method_types?: string[],
            receipt_email?: string,
            setup_future_usage?: string,
            shipping?: object,
            statement_descriptor?: string,
            statement_descriptor_suffix?: string,
            application_fee_amount?: number, 
            capture_method?: unknown,
            confirmation_method?: unknown,
            error_on_requires_action?: unknown,
            mandate?: unknown,
            mandate_data?: unknown,
            on_behalf_of?: unknown,
            payment_method_data?: unknown,
            payment_method_options?: unknown,
            return_url?: string,
            transfer_data?: unknown,
            transfer_group?: unknown,
            use_stripe_sdk?: unknown 
        }
    ) : Promise<unknown> {
        return client('/payment_intents', params, 'POST')
    }

    export function update(
        id: string,
        params: {
            amount?: number,
            currency?: string,
            confirm?: boolean,
            customer?: string,
            description?: string,
            metadata?: [string, unknown], 
            off_session?: boolean,
            payment_method?: string,
            payment_method_types?: string[],
            receipt_email?: string,
            setup_future_usage?: string,
            shipping?: object,
            statement_descriptor?: string,
            statement_descriptor_suffix?: string,
            application_fee_amount?: number, 
            capture_method?: unknown,
            confirmation_method?: unknown,
            error_on_requires_action?: unknown,
            mandate?: unknown,
            mandate_data?: unknown,
            on_behalf_of?: unknown,
            payment_method_data?: unknown,
            payment_method_options?: unknown,
            return_url?: string,
            transfer_data?: unknown,
            transfer_group?: unknown,
            use_stripe_sdk?: unknown 
        }
    ) : Promise<unknown> {
        return client(`/payment_intents/${id}`, params, 'POST')
    }

    export function confirm(id: string, params: unknown) : Promise<unknown> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST')
    }

    export function capture(id: string, params: unknown) : Promise<unknown> {
        return client(`/payment_intents/${id}/capture`, params, 'POST')
    }

    export function cancel(id: string, params: unknown) : Promise<unknown> {
        return client(`/payment_intents/${id}/confirm`, params, 'POST')
    }

    export function list(params: unknown) : Promise<unknown> {
        return client(`/payment_intents/`, params, 'GET')
    }
}
