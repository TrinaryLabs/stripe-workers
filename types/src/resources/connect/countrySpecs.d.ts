declare type CountrySpecsResponse = {
    id: string
    object: string
    default_currency: string
    supported_bank_account_currencies: object
    supported_payment_currencies: [string]
    supported_payment_methods: [string]
    supported_transfer_countries: [string]
    verification_fields: object
}
export declare namespace countrySpecs {
    let client: Function
    function list(
        params: {
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [CountrySpecsResponse]
    }>
    function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<CountrySpecsResponse>
}
export {}
//# sourceMappingURL=countrySpecs.d.ts.map
