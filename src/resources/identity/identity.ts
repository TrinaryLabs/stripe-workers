import qs from 'qs'
import {
    VerificationReportResponse,
    VerificationSessionResponse,
} from '../../types'
import { returnToHeaders } from '../../util'

export namespace identity {
    export let client: Function
    export namespace verificationSessions {
        export async function create(
            params: {
                type: string
                metadata?: {}
                options?: {
                    document?: {
                        allowed_types?: string
                        require_id_number?: boolean
                        require_live_capture?: boolean
                        require_matching_selfie?: boolean
                    }
                }
                return_url?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<VerificationSessionResponse> {
            return client(
                `/identity/verification_sessions?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
        export async function list(
            params: {
                created?: {
                    gt?: number
                    gte?: number
                    lt?: number
                    lte?: number
                }
                status?: string
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [VerificationSessionResponse]
        }> {
            return client(
                `/identity/verification_sessions?${qs.stringify(
                    params,
                )}&${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
        export async function retrieve(
            id: string,
            settings?: {
                stripeAccount?: string
                expand?: Array<string>
            },
        ): Promise<VerificationSessionResponse> {
            return client(
                `/identity/verification_sessions/${id}?${qs.stringify({
                    expand: settings?.expand,
                })}`,
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
                metadata?: object
                options?: {
                    document?: {
                        allowed_types?: string
                        require_id_number?: boolean
                        require_live_capture?: boolean
                        require_matching_selfie?: boolean
                    }
                }
                type?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<VerificationSessionResponse> {
            return client(
                `/identity/verification_sessions/${id}?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                params,
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
        export async function cancel(
            id: string,
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<VerificationSessionResponse> {
            return client(
                `/identity/verification_sessions/${id}/cancel?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
        export async function redact(
            id: string,
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<VerificationSessionResponse> {
            return client(
                `/identity/verification_sessions/${id}/redact?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'POST',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
    export namespace verificationReports {
        export async function retrieve(
            id: string,
            settings?: {
                stripeAccount?: string
                expand?: Array<string>
            },
        ): Promise<VerificationReportResponse> {
            return client(
                `/identity/verification_reports/${id}?${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
        export async function list(
            params: {
                created?: {
                    gt?: number
                    gte?: number
                    lt?: number
                    lte?: number
                }
                status?: string
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            settings?: {
                stripeAccount?: string
                idempotencyKey?: string
                expand?: Array<string>
            },
        ): Promise<{
            object: string
            url: string
            has_more: boolean
            data: [VerificationReportResponse]
        }> {
            return client(
                `/identity/verification_reports?${qs.stringify(
                    params,
                )}&${qs.stringify({
                    expand: settings?.expand,
                })}`,
                {},
                'GET',
                {
                    headers: returnToHeaders(settings),
                },
            )
        }
    }
}
