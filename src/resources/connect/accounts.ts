import qs from 'qs'
import {
    AccountsResponse,
    AccountsCapabilityResponse,
    PersonResponse,
    AccountBankAccountResponse,
    AccountCardResponse,
} from '../../types'

export namespace accounts {
    export let client: Function

    export function create(
        params: {
            type: string
            country?: string
            email?: string
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
    ): Promise<AccountsResponse> {
        return client('/accounts', params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<AccountsResponse> {
        return client(`/accounts/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function update(
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
    ): Promise<AccountsResponse> {
        return client(`/accounts/${id}`, params, 'POST', {
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
        return client(`/accounts/${id}`, {}, 'DELETE', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function reject(
        id: string,
        params: { reason: string },
        stripeAccount?: string,
    ): Promise<AccountsResponse> {
        return client(`/accounts/${id}/reject`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function list(
        params?: {
            created?: unknown
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [AccountsResponse]
    }> {
        return client(`/accounts`, params, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createLoginLink(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        object: string
        created: number
        url: string
        id: string
    }> {
        return client(`/accounts/${id}/login_links`, {}, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveCapability(
        user_id: string,
        cap_id: string,
        stripeAccount?: string,
    ): Promise<AccountsCapabilityResponse> {
        return client(
            `/accounts/${user_id}/capabilities/${cap_id}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function updateCapability(
        user_id: string,
        cap_id: string,
        params: {
            requested?: boolean
        },
        stripeAccount?: string,
    ): Promise<AccountsCapabilityResponse> {
        return client(
            `/accounts/${user_id}/capabilities/${cap_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listCapabilities(
        user_id: string,
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [AccountsCapabilityResponse]
    }> {
        return client(`/accounts/${user_id}/capabilities`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function createPerson(
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
    ): Promise<PersonResponse> {
        return client(`/accounts/${user_id}/persons`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrievePerson(
        user_id: string,
        person_id: string,
        stripeAccount?: string,
    ): Promise<PersonResponse> {
        return client(`/accounts/${user_id}/persons/${person_id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function updatePerson(
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
    ): Promise<PersonResponse> {
        return client(
            `/accounts/${user_id}/persons/${person_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function deletePerson(
        user_id: string,
        person_id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(
            `/accounts/${user_id}/persons/${person_id}`,
            {},
            'DELETE',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listPersons(
        user_id: string,
        params?: {
            relationship?: object
            limit?: number
            ending_before?: string
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [PersonResponse]
    }> {
        return client(
            `/accounts/${user_id}/persons?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function createExternalAccount(
        id: string,
        params: {
            external_account: object | string
            metadata?: [string, unknown]
            default_for_currency?: string
        },
        stripeAccount?: string,
    ): Promise<AccountBankAccountResponse | AccountCardResponse> {
        return client(`/accounts/${id}/external_accounts`, params, 'POST', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }

    export function retrieveExternalAccount(
        id: string,
        ext_id: string,
        stripeAccount?: string,
    ): Promise<AccountBankAccountResponse | AccountCardResponse> {
        return client(
            `/accounts/${id}/external_accounts/${ext_id}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function updateExternalAccount(
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
    ): Promise<AccountBankAccountResponse | AccountCardResponse> {
        return client(
            `/accounts/${id}/external_accounts/${ext_id}`,
            params,
            'POST',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function deleteExternalAccount(
        id: string,
        ext_id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string
        object: string
        deleted: boolean
    }> {
        return client(
            `/accounts/${id}/external_accounts/${ext_id}`,
            {},
            'DELETE',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }

    export function listExternalAccounts(
        id: string,
        params?: {
            object: string // bank_account or card
            ending_before?: string
            limit?: number
            starting_after?: string
        },
        stripeAccount?: string,
    ): Promise<{
        object: string
        url: string
        has_more: boolean
        data: [AccountBankAccountResponse | AccountCardResponse]
    }> {
        return client(
            `/accounts/${id}/external_accounts?${qs.stringify(params)}`,
            {},
            'GET',
            {
                headers: stripeAccount
                    ? { 'Stripe-Account': stripeAccount }
                    : {},
            },
        )
    }
}
