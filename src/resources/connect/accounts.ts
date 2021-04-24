import qs from 'qs'
import { StripeAPIError } from '../../error'
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
            capabilities?: {
                acss_debit_payments?: {
                    requested?: boolean
                }
                afterpay_clearpay_payments?: {
                    requested?: boolean
                }
                au_becs_debit_payments?: {
                    requested?: boolean
                }
                bacs_debit_payments?: {
                    requested?: boolean
                }
                bancontact_payments?: {
                    requested?: boolean
                }
                card_issuing?: {
                    requested?: boolean
                }
                card_payments?: {
                    requested?: boolean
                }
                cartes_bancaires_payments?: {
                    requested?: boolean
                }
                eps_payments?: {
                    requested?: boolean
                }
                fpx_payments?: {
                    requested?: boolean
                }
                giropay_payments?: {
                    requested?: boolean
                }
                grabpay_payments?: {
                    requested?: boolean
                }
                ideal_payments?: {
                    requested?: boolean
                }
                jcb_payments?: {
                    requested?: boolean
                }
                legacy_payments?: {
                    requested?: boolean
                }
                oxxo_payments?: {
                    requested?: boolean
                }
                p24_payments?: {
                    requested?: boolean
                }
                sepa_debit_payments?: {
                    requested?: boolean
                }
                sofort_payments?: {
                    requested?: boolean
                }
                tax_reporting_us_1099_k?: {
                    requested?: boolean
                }
                tax_reporting_us_1099_misc?: {
                    requested?: boolean
                }
                transfers?: {
                    requested?: boolean
                }
            }
            business_type?: string
            company?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                address_kana?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                address_kanji?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                directors_provided?: boolean
                executives_provided?: boolean
                name?: string
                name_kana?: string
                name_kanji?: string
                owners_provided?: boolean
                phone?: string
                registration_number?: string
                structure?: string
                tax_id?: string
                tax_id_registrar?: string
                vat_id?: string
                verification?: {
                    document?: {
                        back?: string
                        front?: string
                    }
                } 
            }
            individual?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                address_kana?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                address_kanji?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                dob?: {
                    day: number
                    month: number
                    year: number
                }
                email?: string
                first_name?: string
                last_name?: string
                first_name_kana?: string
                first_name_kanji?: string
                gender?: string
                id_number?: string
                last_name_kana?: string
                last_name_kanji?: string
                maiden_name?: string
                metadata?: object
                phone?: string
                political_exposure?: string
                ssn_last_4?: number
                verification?: {
                    additional_document?: {
                        back?: string
                        front?: string
                    }
                    document?: {
                        back?: string
                        front?: string
                    }
                }
            }
            metadata?: object
            tos_acceptance?: {
                date?: number
                ip?: string
                service_agreement?: string
                user_agent?: string
            }
            account_token?: string
            business_profile?: {
                mcc?: string
                name?: string
                product_description?: string
                support_address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                support_email?: string
                support_phone?: string
                support_url?: string
                terms_of_service_url?: string
                url?: string
            }
            default_currency?: string
            documents?: {
                bank_account_ownership_verification?: {
                    files?: string
                }
                company_license?: {
                    files?: string
                }
                company_memorandum_of_association?: {
                    files?: string
                }
                company_ministerial_decree?: {
                    files?: string
                }
                company_registration_verification?: {
                    files?: string
                }
                company_tax_id_verification?: {
                    files?: string
                }
            }
            external_account?: {
                object: string
                country: string
                currency: string
                account_holder_name?: string
                account_holder_type?: string
                routing_number?: string
                account_number: string
            }
            settings?: {
                branding?: {
                    icon?: string
                    logo?: string
                    primary_color?: string
                    secondary_color?: string
                }
                card_issuing?: {
                    tos_acceptance?: {
                        date?: number
                        ip?: string
                        user_agent?: string
                    }
                }
                card_payments?: {
                    decline_on?: {
                        avs_failure?: boolean
                        cvc_failure?: boolean
                    }
                    statement_descriptor_prefix?: string
                }
                payments?: {
                    statement_descriptor?: string
                    statement_descriptor_kana?: string
                    statement_descriptor_kanji?: string
                }
                payouts?: {
                    debit_negative_balances?: boolean
                    schedule?: {
                        delay_days?: number
                        interval?: string
                        monthly_anchor?: number
                        weekly_anchor?: StripeAPIError
                    }
                    statement_descriptor?: string
                }
            }
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
            capabilities?: {
                acss_debit_payments?: {
                    requested?: boolean
                }
                afterpay_clearpay_payments?: {
                    requested?: boolean
                }
                au_becs_debit_payments?: {
                    requested?: boolean
                }
                bacs_debit_payments?: {
                    requested?: boolean
                }
                bancontact_payments?: {
                    requested?: boolean
                }
                card_issuing?: {
                    requested?: boolean
                }
                card_payments?: {
                    requested?: boolean
                }
                cartes_bancaires_payments?: {
                    requested?: boolean
                }
                eps_payments?: {
                    requested?: boolean
                }
                fpx_payments?: {
                    requested?: boolean
                }
                giropay_payments?: {
                    requested?: boolean
                }
                grabpay_payments?: {
                    requested?: boolean
                }
                ideal_payments?: {
                    requested?: boolean
                }
                jcb_payments?: {
                    requested?: boolean
                }
                legacy_payments?: {
                    requested?: boolean
                }
                oxxo_payments?: {
                    requested?: boolean
                }
                p24_payments?: {
                    requested?: boolean
                }
                sepa_debit_payments?: {
                    requested?: boolean
                }
                sofort_payments?: {
                    requested?: boolean
                }
                tax_reporting_us_1099_k?: {
                    requested?: boolean
                }
                tax_reporting_us_1099_misc?: {
                    requested?: boolean
                }
                transfers?: {
                    requested?: boolean
                }
            }
            business_type?: string
            company?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                address_kana?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                address_kanji?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                directors_provided?: boolean
                executives_provided?: boolean
                name?: string
                name_kana?: string
                name_kanji?: string
                owners_provided?: boolean
                phone?: string
                registration_number?: string
                structure?: string
                tax_id?: string
                tax_id_registrar?: string
                vat_id?: string
                verification?: {
                    document?: {
                        back?: string
                        front?: string
                    }
                } 
            }
            individual?: {
                address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                address_kana?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                address_kanji?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                    town?: string
                }
                dob?: {
                    day: number
                    month: number
                    year: number
                }
                email?: string
                first_name?: string
                last_name?: string
                first_name_kana?: string
                first_name_kanji?: string
                gender?: string
                id_number?: string
                last_name_kana?: string
                last_name_kanji?: string
                maiden_name?: string
                metadata?: object
                phone?: string
                political_exposure?: string
                ssn_last_4?: number
                verification?: {
                    additional_document?: {
                        back?: string
                        front?: string
                    }
                    document?: {
                        back?: string
                        front?: string
                    }
                }
            }
            metadata?: object
            tos_acceptance?: {
                date?: number
                ip?: string
                service_agreement?: string
                user_agent?: string
            }
            account_token?: string
            business_profile?: {
                mcc?: string
                name?: string
                product_description?: string
                support_address?: {
                    city?: string
                    country?: string
                    line1?: string
                    line2?: string
                    postal_code?: string
                    state?: string
                }
                support_email?: string
                support_phone?: string
                support_url?: string
                terms_of_service_url?: string
                url?: string
            }
            default_currency?: string
            documents?: {
                bank_account_ownership_verification?: {
                    files?: string
                }
                company_license?: {
                    files?: string
                }
                company_memorandum_of_association?: {
                    files?: string
                }
                company_ministerial_decree?: {
                    files?: string
                }
                company_registration_verification?: {
                    files?: string
                }
                company_tax_id_verification?: {
                    files?: string
                }
            }
            external_account?: {
                object: string
                country: string
                currency: string
                account_holder_name?: string
                account_holder_type?: string
                routing_number?: string
                account_number: string
            }
            settings?: {
                branding?: {
                    icon?: string
                    logo?: string
                    primary_color?: string
                    secondary_color?: string
                }
                card_issuing?: {
                    tos_acceptance?: {
                        date?: number
                        ip?: string
                        user_agent?: string
                    }
                }
                card_payments?: {
                    decline_on?: {
                        avs_failure?: boolean
                        cvc_failure?: boolean
                    }
                    statement_descriptor_prefix?: string
                }
                payments?: {
                    statement_descriptor?: string
                    statement_descriptor_kana?: string
                    statement_descriptor_kanji?: string
                }
                payouts?: {
                    debit_negative_balances?: boolean
                    schedule?: {
                        delay_days?: number
                        interval?: string
                        monthly_anchor?: number
                        weekly_anchor?: StripeAPIError
                    }
                    statement_descriptor?: string
                }
            }
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
            created?: {
                gt?: string
                gte?: string
                lt?: string
                lte?: string
            }
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
            adress?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
            }
            dob?: {
                day: number
                month: number
                year: number
            }
            email?: string
            first_name?: string
            id_number?: string
            last_name?: string
            metadata?: object
            phone?: string
            relationship?: {
                director?: boolean
                executive?: boolean
                owner?: boolean
                percent_ownership?: number
                representative?: false
                title?: string
            }
            ssn_last_4?: number
            address_kana?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
                town?: string
            }
            address_kanji?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
                town?: string
            }
            first_name_kana?: string
            first_name_kanji?: string
            gender?: string
            last_name_kana?: string
            last_name_kanji?: string
            maiden_name?: string
            nationality?: string
            person_token?: string
            political_exposure?: boolean
            verification?: {
                additional_document?: {
                    back?: string
                    front?: string
                }
                document?: {
                    back?: string
                    front?: string
                }
            }
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
            adress?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
            }
            dob?: {
                day: number
                month: number
                year: number
            }
            email?: string
            first_name?: string
            id_number?: string
            last_name?: string
            metadata?: object
            phone?: string
            relationship?: {
                director?: boolean
                executive?: boolean
                owner?: boolean
                percent_ownership?: number
                representative?: false
                title?: string
            }
            ssn_last_4?: number
            address_kana?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
                town?: string
            }
            address_kanji?: {
                city?: string
                country?: string
                line1?: string
                line2?: string
                postal_code?: string
                state?: string
                town?: string
            }
            first_name_kana?: string
            first_name_kanji?: string
            gender?: string
            last_name_kana?: string
            last_name_kanji?: string
            maiden_name?: string
            nationality?: string
            person_token?: string
            political_exposure?: boolean
            verification?: {
                additional_document?: {
                    back?: string
                    front?: string
                }
                document?: {
                    back?: string
                    front?: string
                }
            }
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
            relationship?: {
                director?: boolean
                executive?: boolean
                owner?: boolean
                representative?: boolean
            }
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
            external_account: {
                object: string
                country?: string
                currency?: string
                account_holder_name?: string
                account_holder_type?: string
                routing_number?: string
                account_number: string
                number?: string
                exp_month?: number
                exp_year?: number
                cvc?: number
                name?: string
                metadata?: object
                default_for_currency?: string
                address_line1?: string
                address_line2?: string
                address_city?: string
                address_state?: string
                address_zip?: string
                address_country?: string
            } | string
            metadata?: object
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
            metadata?: object
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
            object: string
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
