export namespace sigma {
    export namespace scheduledQueryRuns {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/sigma/scheduled_query_runs/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                ending_before?: string
                limit?: number
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/sigma/scheduled_query_runs?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }
}
