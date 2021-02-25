import qs from 'qs'

export namespace reporting {
    export namespace reportRuns {
        export let client: Function

        export function create(
            params: {
                report_type: string
                parameters?: object
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/reporting/report_runs`,
                params,
                'POST',
                {
                    headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
                }
            )
        }

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/reporting/report_runs/${id}`,
                {},
                'GET',
                {
                    headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
                }
            )
        }

        export function list(
            params: {
                created?: object //how to send this???
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/reporting/report_runs?${qs.stringify(params)}`,
                {},
                'GET',
                {
                    headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
                }
            )
        }
    }

    export namespace reportTypes {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/reporting/report_types/${id}`,
                {},
                'GET',
                {
                    headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
                }
            )
        }

        export function list(stripeAccount?: string): Promise<unknown> {
            return client(
                `/reporting/report_types`,
                {},
                'GET',
                {
                    headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {}
                }
            )
        }
    }
}
