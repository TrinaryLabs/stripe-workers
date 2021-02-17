export declare namespace accounts {
    let client: Function
    function create(
        params: {
            type: string
            country?: string
            email: string
            capabilities?: object
            business_type?: string
            company?: object
            individual?: object
            metadata?: [string, unknown]
            tos_acceptance?: object
            account_token?: unknown
            business_profile?: object
            default_currency?: string
            documents?: object
            external_account?: object
            settings?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>
    function update(
        id: string,
        params: {
            type: string
            country?: string
            email: string
            capabilities?: object
            business_type?: string
            company?: object
            individual?: object
            metadata?: [string, unknown]
            tos_acceptance?: object
            account_token?: unknown
            business_profile?: object
            default_currency?: string
            documents?: object
            external_account?: object
            settings?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function del(id: string, stripeAccount?: string): Promise<unknown>
    function reject(
        id: string,
        params: {
            reason: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function list(
        params: {
            created?: unknown
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function createLoginLink(
        id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveCapability(
        user_id: string,
        cap_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updateCapability(
        user_id: string,
        cap_id: string,
        params: {
            requested?: boolean
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function listCapabilities(
        user_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function createPerson(
        user_id: string,
        params: {
            adress?: object
            dob?: object
            email?: string
            first_name?: string
            id_number?: string
            last_name?: string
            metadata?: [string, unknown]
            phone?: string
            relationship?: object
            ssn_last_4?: number
            address_kana?: object
            address_kanji?: object
            first_name_kana?: string
            first_name_kanji?: string
            gender?: string
            last_name_kana?: string
            last_name_kanji?: string
            maiden_name?: string
            nationality?: string
            person_token?: string
            political_exposure?: unknown
            verification?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrievePerson(
        user_id: string,
        person_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updatePerson(
        user_id: string,
        person_id: string,
        params: {
            adress?: object
            dob?: object
            email?: string
            first_name?: string
            id_number?: string
            last_name?: string
            metadata?: [string, unknown]
            phone?: string
            relationship?: object
            ssn_last_4?: number
            address_kana?: object
            address_kanji?: object
            first_name_kana?: string
            first_name_kanji?: string
            gender?: string
            last_name_kana?: string
            last_name_kanji?: string
            maiden_name?: string
            nationality?: string
            person_token?: string
            political_exposure?: unknown
            verification?: object
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function deletePerson(
        user_id: string,
        person_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function listPersons(
        user_id: string,
        params: {
            relationship?: object
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function createExternalAccount(
        id: string,
        params: {
            external_account: object
            metadata?: [string, unknown]
            default_for_currency?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function retrieveExternalAccount(
        id: string,
        ext_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function updateExternalAccount(
        id: string,
        ext_id: string,
        params: {
            metadata?: [string, unknown]
            default_for_currency?: string
            account_holder_name?: string
            account_holder_type?: string
            addess_city?: string
            address_country?: string
            address_line1?: string
            address_line2?: string
            address_state?: string
            address_zip?: string
            exp_month?: number
            exp_year?: number
            name?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
    function deleteExternalAccount(
        id: string,
        ext_id: string,
        stripeAccount?: string,
    ): Promise<unknown>
    function listExternalAccounts(
        id: string,
        params: {
            object: string
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<unknown>
}
//# sourceMappingURL=accounts.d.ts.map
