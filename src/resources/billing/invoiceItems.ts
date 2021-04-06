import qs from 'qs'

type InvoiceItemsResponse = {
    id: string
    object: string
    amount: number
    currency: string
    customer: string
    date: number
    description: string
    discountable: boolean
    discounts: [string]
    invoice: string
    livemode: boolean
    metadata: object
    period: {
        end: number
        start: number
    }
    price: {
        id: string
        object: string
        active: boolean
        billing_scheme: string
        created: number
        currency: string
        livemode: boolean
        lookup_key: string
        metadata: object
        nickname: string
        product: string
        recurring: {
            aggregate_usage: string
            interval: string
            interval_count: number
            usage_type: string
        }
        tiers: [
            {
                flat_amount: number
                flat_amount_decimal: string
                unit_amount: number
                unit_amount_decimal: string
                up_to: number
            }
        ]
        tiers_mode: string
        transform_quantity: {
            divide_by: number
            round: string
        }
        type: string
        unit_amount: number
        unit_amount_decimal: string
    }
    proration: boolean
    quantity: number
    subscription: string
    subscription_item: string
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            created: number
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        }
    ]
    unit_amount: number
    unit_amount_decimal: string
}

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
