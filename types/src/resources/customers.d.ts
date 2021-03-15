declare type CustomersResponse = {
    id: string
    object: string
    address: unknown
    balance: number
    created: number
    currency: string
    default_source: unknown
    delinquent: boolean
    description: unknown
    discount: unknown
    email: unknown
    invoice_prefix: string
    invoice_settings: object
    livemode: boolean
    metadata: object
    name: unknown
    next_invoice_sequence: number
    phone: unknown
    preferred_locales: []
    shipping: unknown
    tax_exempt: string
}
export declare namespace customers {
    let client: Function
    function create(
        params: {
            adress?: object
            description?: string
            metadata?: [string, unknown]
            name?: string
            payment_method?: string
            phone?: string
            shipping?: object
            balance?: number
            coupon?: unknown
            invoice_prefix?: string
            invoice_settings?: object
            next_invoice_sequence?: unknown
            preferred_locales?: unknown
            promotion_code?: string
            source?: unknown
            tax_exempt?: string
            tax_id_data?: object
        },
        stripeAccount?: string,
    ): Promise<CustomersResponse>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CustomersResponse>
    function update(
        id: string,
        params: {
            adress?: object
            description?: string
            metadata?: [string, unknown]
            name?: string
            payment_method?: string
            phone?: string
            shipping?: object
            balance?: number
            coupon?: unknown
            invoice_prefix?: string
            invoice_settings?: object
            next_invoice_sequence?: unknown
            preferred_locales?: unknown
            promotion_code?: string
            source?: unknown
            tax_exempt?: string
        },
        stripeAccount: string,
    ): Promise<CustomersResponse>
    function del(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }>
    function list(
        params: {
            email?: string
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
        data: [CustomersResponse]
    }>
    function createSource(
        cus_id: string,
        params: {
            source: unknown
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveSource(
        cus_id: string,
        id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updateSource(
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
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function verifySource(
        cus_id: string,
        ba_id: string,
        params: {
            account_holder_name?: string
            account_holder_type?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function deleteSource(
        cus_id: string,
        id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function listSource(
        cus_id: string,
        params: {
            object: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function createBalanceTransaction(
        id: string,
        params: {
            amount: number
            currency: string
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveBalanceTransaction(
        id: string,
        tra_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updateBalanceTransaction(
        id: string,
        tra_id: string,
        params: {
            description?: string
            metadata?: [string, unknown]
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function listBalanceTransaction(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function createTaxId(
        id: string,
        params: {
            type: string
            value: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function deleteTaxId(
        cus_id: string,
        tax_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function listTaxId(
        id: string,
        params: {
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function deleteDiscount(
        cus_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
}
export {}
//# sourceMappingURL=customers.d.ts.map
