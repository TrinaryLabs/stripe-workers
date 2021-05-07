import qs from 'qs'
import { InvoiceItemsResponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace invoiceItems {
    export let client: Function

    export function create(
        params: {
            customer: string
            currency?: string
            amount?: number
            description?: string
            metadata?: object
            period?: {
                end: number
                start: number
            }
            price?: string
            discountable?: boolean
            discounts?: [
                {
                    coupon?: string
                    discount?: string
                },
            ]
            invoice?: string
            price_data?: {
                currency: string
                product: string
                unit_amount_decimal?: number
                unit_amount?: number
            }
            quantity?: number
            tax_rates?: string
            unit_amount?: number
            unit_amount_decimal?: number
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }

    export function update(
        id: string,
        params: {
            amount?: number
            description?: string
            metadata?: object
            period?: {
                end: number
                start: number
            }
            price?: string
            discountable?: boolean
            discounts?: string[]
            price_data?: {
                currency: string
                product: string
                unit_amount_decimal?: number
                unit_amount?: number
            }
            quantity?: number
            tax_rates?: string
            unit_amount?: number
            unit_amount_decimal?: number
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems/${id}`, params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/invoiceitems/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            customer?: string
            created?: number
            ending_before?: string
            invoice?: string
            limit?: number
            pending?: boolean
            starting_after?: string
        },
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoiceItemsResponse]
    }> {
        return client(`/invoiceitems?${qs.stringify(params)}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
