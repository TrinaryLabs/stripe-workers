import qs from 'qs'
import { InvoiceItemsResponse } from '../../types'

export namespace invoiceItems {
    export let client: Function

    export function create(
        params: {
            customer: string
            currency?: string
            amount?: number
            description?: string
            metadata?: [string, unknown]
            period?: object
            price?: string
            discountable?: boolean
            discounts?: string[]
            invoice?: string
            price_data?: object
            quantity?: number
            tax_rates?: string
            unit_amount?: number
            unit_amount_decimal?: number
        },
        stripeAccount?: string,
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
        id: string,
        params: {
            amount?: number
            description?: string
            metadata?: [string, unknown]
            period?: object
            price?: string
            discountable?: boolean
            discounts?: string[]
            price_data?: object
            quantity?: number
            tax_rates?: string
            unit_amount?: number
            unit_amount_decimal?: number
        },
        stripeAccount?: string,
    ): Promise<InvoiceItemsResponse> {
        return client(`/invoiceitems/${id}`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
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
        return client(`/invoiceitems/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params: {
            customer?: string
            created?: number
            ending_before?: string
            invoice?: string
            limit?: number
            pending?: boolean
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [InvoiceItemsResponse]
    }> {
        return client(`/invoiceitems?${qs.stringify(params)}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
