import qs from 'qs'
import {
    BillingPortalResponse,
    BillingPortalConfigurationResponse,
} from '../../types'
import { returnToHeaders } from '../../util'

export namespace billingPortal {
    export let client: Function
    export namespace sessions {
        export function create(
            params: {
                customer: string
                return_url?: string
                configuration?: string
                on_behalf_of?: string
            },
            settings?: {
                stripeAccount?: string,
                idempotencyKey?: string 
            },
        ): Promise<BillingPortalResponse> {
            return client('/billing_portal/sessions', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }
    }

    export namespace configurations {
        export function create(
            params: {
                business_profile: {
                    privacy_policy_url: string
                    terms_of_service_url: string
                    headline?: string
                }
                features: {
                    customer_update?: {
                        allowed_updates: string[]
                        enabled: boolean
                    }
                    invoice_history?: {
                        enabled: boolean
                    }
                    payment_method_update?: {
                        enabled: boolean
                    }
                    subscription_cancel?: {
                        enabled: boolean
                        mode?: string
                        proration_behavior?: string
                    }
                    subscription_pause?: {
                        enabled?: boolean
                    }
                    subscription_update?: {
                        default_allowed_updates: string[]
                        enabled: boolean
                        products: [
                            {
                                prices: string[]
                                product: string
                            },
                        ]
                        proration_behavior?: string
                    }
                }
                default_return_url?: string
            },
            settings?: {
                stripeAccount?: string,
                idempotencyKey?: string 
            },
        ): Promise<BillingPortalConfigurationResponse> {
            return client('/billing_portal/configurations', params, 'POST', {
                headers: returnToHeaders(settings),
            })
        }

        export function update(
            id: string,
            params: {
                active?: boolean
                business_profile?: {
                    privacy_policy_url: string
                    terms_of_service_url: string
                    headline?: string
                }
                features?: {
                    customer_update?: {
                        allowed_updates: string[]
                        enabled: boolean
                    }
                    invoice_history?: {
                        enabled: boolean
                    }
                    payment_method_update?: {
                        enabled: boolean
                    }
                    subscription_cancel?: {
                        enabled: boolean
                        mode?: string
                        proration_behavior?: string
                    }
                    subscription_pause?: {
                        enabled?: boolean
                    }
                    subscription_update?: {
                        default_allowed_updates: string[]
                        enabled: boolean
                        products: [
                            {
                                prices: string[]
                                product: string
                            },
                        ]
                        proration_behavior?: string
                    }
                }
                default_return_url?: string
            },
            settings?: {
                stripeAccount?: string,
                idempotencyKey?: string 
            },
        ): Promise<BillingPortalConfigurationResponse> {
            return client(
                `/billing_portal/configurations/${id}`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<BillingPortalConfigurationResponse> {
            return client(`/billing_portal/configurations/${id}`, {}, 'GET', {
                headers: returnToHeaders({stripeAccount}),
            })
        }

        export function list(
            params?: {
                active?: boolean
                is_default?: boolean
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [BillingPortalConfigurationResponse]
        }> {
            return client(
                `/billing_portal/configurations?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: returnToHeaders({stripeAccount}),
                },
            )
        }
    }
}
