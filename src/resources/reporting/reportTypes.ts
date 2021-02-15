export namespace reporting {
    export namespace reportTypes {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string
        ) : Promise<unknown> {
            return client(
                `/reporting/report_types/${id}`,
                {},
                'GET', stripeAccount
                ? { 'Stripe-Account': stripeAccount }
                : {},
            )
        }

        export function list(
            stripeAccount?: string
        ) : Promise<unknown> {
            return client(
                `/reporting/report_types`,
                {},
                'GET', stripeAccount
                ? { 'Stripe-Account': stripeAccount }
                : {},
            )
        }
    }
}