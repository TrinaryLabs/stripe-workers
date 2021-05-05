import { TokensResponse } from '../../types'
import { returnToHeaders } from '../../util'
export namespace tokens {
    export let client: Function

    export function create(
        params: {
            card?: {
                number?: string
                exp_month?: number
                exp_year?: number
                currency?: string
                cvc?: string
                name?: string
                address_line1?: string
                address_line2?: string
                address_city?: string
                address_state?: string
                address_zip?: string
                address_country?: string
            }
            bank_account?: {
                country?: string
                currency?: string
                account_holder_name?: string
                account_holder_type?: string
                routing_number?: string
                account_number?: string
            }
            pii?: {
                id_number?: string
            }
            account?: {
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
                tos_shown_and_accepted?: boolean
            }
            person?: {
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
                first_name_kana?: string
                first_name_kanji?: string
                gender?: string
                id_number?: string
                last_name?: string
                last_name_kana?: string
                last_name_kanji?: string
                maiden_name?: string
                metadata?: object
                nationality?: string
                phone?: string
                political_exposure?: boolean
                relationship?: {
                    director?: boolean
                    executive?: boolean
                    owner?: boolean
                    percent_ownership?: number
                    representative?: boolean
                    title?: string
                }
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
            cvc_update?: {
                cvc?: string
            }
        },
        settings?: {
            stripeAccount?: string
            idempotencyKey?: string
        },
    ): Promise<TokensResponse> {
        return client('/tokens', params, 'POST', {
            headers: returnToHeaders(settings),
        })
    }

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<TokensResponse> {
        return client(`/tokens/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
