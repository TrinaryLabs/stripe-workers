import qs from 'qs'
import { SourcesResponse } from '../../types'
export namespace sources {
    export let client: Function

    export function create(
        params: {
            type: string
            amount?: number
            currency?: string
            metadata?: object
            owner?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                email?: string
                name?: string
                phone?: string
            }
            redirect?: {
                return_url: string
            }
            statement_descriptor?: string
            flow?: string
            mandate?: {
                acceptance?: {
                    date: number
                    status: string
                    ip?: string
                    offline?: {
                        contact_email: string
                    }
                    online?: {
                        date: number
                        ip: string
                        user_agent: string
                    }
                    type?: string
                    user_agent?: string
                }
                amount?: number
                currency?: string
                interval?: string
                notification_method?: string
            }
            receiver?: {
                refund_attributes_method?: string
            }
            source_order?: {
                items?: [
                    {
                        amount?: number
                        currency?: string
                        description?: string
                        parent?: string
                        quantity?: number
                        type?: string
                    }
                ]
                shipping?: {
                    address: {
                        line1: string
                        city?: string
                        country?: string
                        line2?: string
                        postal_code?: string
                        state?: string
                    }
                    carrier?: string
                    name?: string
                    phone?: string
                    tracking_number?: string
                }
            }
            token?: string
            usage?: string
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client('/sources', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        params: {
            client_secret: string
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client(`/sources/${id}?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            amount?: number
            metadata?: object
            owner?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                email?: string
                name?: string
                phone?: string
            }
            mandate?: {
                acceptance?: {
                    date: number
                    status: string
                    ip?: string
                    offline?: {
                        contact_email: string
                    }
                    online?: {
                        date: number
                        ip: string
                        user_agent: string
                    }
                    type?: string
                    user_agent?: string
                }
                amount?: number
                currency?: string
                interval?: string
                notification_method?: string
            }
            source_order?: {
                items?: [
                    {
                        amount?: number
                        currency?: string
                        description?: string
                        parent?: string
                        quantity?: number
                        type?: string
                    }
                ]
                shipping?: {
                    address: {
                        line1: string
                        city?: string
                        country?: string
                        line2?: string
                        postal_code?: string
                        state?: string
                    }
                    carrier?: string
                    name?: string
                    phone?: string
                    tracking_number?: string
                }
            }
        },
        stripeAccount?: string,
    ): Promise<SourcesResponse> {
        return client(`/sources/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
