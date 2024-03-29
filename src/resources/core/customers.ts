import qs from 'qs'
import {
    CustomersResponse,
    SourcesResponse,
    CardSourceResponse,
    BankAccountResponse,
    CustomerBalanceTransactionResponse,
    TaxIDsResponse,
} from '../../types'
import { returnToHeaders } from '../../util'
export namespace customers {
    export let client: Function

    export function create(
        params: {
            adress?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
            }
            description?: string
            metadata?: object
            name?: string
            payment_method?: string
            phone?: string
            shipping?: {
                address: {
                    city?: string
                    country?: string
                    line1: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                name: string
                phone?: string
            }
            balance?: number
            coupon?: string
            invoice_prefix?: string
            invoice_settings?: {
                custom_fields: [
                    {
                        name: string
                        value: string
                    },
                ]
                default_payment_method?: string
                footer?: string
            }
            next_invoice_sequence?: number
            preferred_locales?: [string]
            promotion_code?: string
            source?: any
            tax_exempt?: string
            tax_id_data?: [
                {
                    type: string
                    value: string
                },
            ]
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CustomersResponse> {
        return client(
            `/customers?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<CustomersResponse> {
        return client(
            `/customers/${id}?${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function update(
        id: string,
        params: {
            adress?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
            }
            description?: string
            metadata?: object
            name?: string
            payment_method?: string
            phone?: string
            shipping?: {
                address: {
                    city?: string
                    country?: string
                    line1: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                name: string
                phone?: string
            }
            balance?: number
            coupon?: string
            invoice_prefix?: string
            invoice_settings?: {
                custom_fields: [
                    {
                        name: string
                        value: string
                    },
                ]
                default_payment_method?: string
                footer?: string
            }
            next_invoice_sequence?: number
            preferred_locales?: [string]
            promotion_code?: string
            source?: any
            tax_exempt?: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CustomersResponse> {
        return client(
            `/customers/${id}?${qs.stringify({ expand: settings?.expand })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function del(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function list(
        params?: {
            email?: string
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CustomersResponse]
    }> {
        return client(
            `/customers?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function createSource(
        cus_id: string,
        params: {
            source: any
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<SourcesResponse | CardSourceResponse | BankAccountResponse> {
        return client(
            `/customers/${cus_id}/sources?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieveSource(
        cus_id: string,
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<CardSourceResponse | BankAccountResponse> {
        return client(
            `/customers/${cus_id}/sources/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function updateSource(
        cus_id: string,
        id: string,
        params: {
            amounts?: number[]
            address_city?: string
            address_country?: string
            address_line1?: string
            address_line2?: string
            address_state?: string
            address_zip?: string
            exp_month?: number
            exp_year?: number
            name?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CardSourceResponse | BankAccountResponse> {
        return client(
            `/customers/${cus_id}/sources/${id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function verifySource(
        cus_id: string,
        ba_id: string,
        params: {
            account_holder_name?: string
            account_holder_type?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<BankAccountResponse> {
        return client(
            `/customers/${cus_id}/sources/${ba_id}/verify?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function deleteSource(
        cus_id: string,
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<
        | SourcesResponse
        | {
              id: string
              object: string
              deleted: boolean
          }
    > {
        return client(`/customers/${cus_id}/sources/${id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function listSource(
        cus_id: string,
        params?: {
            object: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CardSourceResponse | BankAccountResponse]
    }> {
        return client(
            `/customers/${cus_id}/sources?${qs.stringify(
                params,
            )}&${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function createBalanceTransaction(
        id: string,
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(
            `/customers/${id}/balance_transactions?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieveBalanceTransaction(
        id: string,
        tra_id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(
            `/customers/${id}/balance_transactions/${tra_id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function updateBalanceTransaction(
        id: string,
        tra_id: string,
        params: {
            description?: string
            metadata?: object
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<CustomerBalanceTransactionResponse> {
        return client(
            `/customers/${id}/balance_transactions/${tra_id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function listBalanceTransactions(
        id: string,
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CustomerBalanceTransactionResponse]
    }> {
        return client(
            `/customers/${id}/balance_transactions?${qs.stringify(
                params,
            )}&${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function createTaxId(
        id: string,
        params: {
            type: string
            value: string
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
            expand?: Array<string>
        },
    ): Promise<TaxIDsResponse> {
        return client(
            `/customers/${id}/tax_ids?${qs.stringify({
                expand: settings?.expand,
            })}`,
            params,
            'POST',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function retrieveTaxId(
        cus_id: string,
        tax_id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<TaxIDsResponse> {
        return client(
            `/customers/${cus_id}/tax_ids/${tax_id}?${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function deleteTaxId(
        cus_id: string,
        tax_id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${cus_id}/tax_ids/${tax_id}`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }

    export function listTaxId(
        id: string,
        params?: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [TaxIDsResponse]
    }> {
        return client(
            `/customers/${id}/tax_ids?${qs.stringify(params)}&${qs.stringify({
                expand: settings?.expand,
            })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }

    export function deleteDiscount(
        cus_id: string,
        settings?: { stripeAccount?: string },
    ): Promise<{
        object: string
        deleted: boolean
    }> {
        return client(`/customers/${cus_id}/discount`, {}, 'DELETE', {
            headers: returnToHeaders(settings),
        })
    }
}
