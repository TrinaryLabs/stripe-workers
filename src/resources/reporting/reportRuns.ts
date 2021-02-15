export namespace reporting {
    export namespace reportRuns {
        export let client: Function

        export function create(
            params: {
                report_type: string,
                parameters?: object 
            }, stripeAccount?: string
        ) : Promise<unknown> {
            return client(
                `/reporting/report_runs`,
                params,
                'POST', stripeAccount
                ? { 'Stripe-Account': stripeAccount }
                : {},
            )
        }

        export function retrieve(
            id: string,
            stripeAccount?: string
        ) : Promise<unknown> {
            return client(
                `/reporting/report_runs/${id}`,
                {},
                'GET', stripeAccount
                ? { 'Stripe-Account': stripeAccount }
                : {},
            )
        }

        export function list(
            params: {
                created?: object, //how to send this???
                ending_before?: string,
                limit?: number,
                starting_after?: string
            }, stripeAccount?: string
        ) : Promise<unknown> {
            return client(
                `/reporting/report_runs?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
                {},
                'GET', stripeAccount
                ? { 'Stripe-Account': stripeAccount }
                : {},
            )
        }
    }
}
