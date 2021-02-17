import qs from 'qs'

export namespace radar {
    export namespace earlyFraudWarnings {
        export let client: Function

        export function retrieve(
            id: string,
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/radar/early_fraud_warnings/${id}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }

        export function list(
            params: {
                charge?: string,
                ending_before?: string,
                limit?: number,
                starting_after?: string
            },
            stripeAccount?: string,
        ): Promise<unknown> {
            return client(
                `/radar/early_fraud_warnings?${qs.stringify(params)}`,
                {},
                'GET',
                stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
            )
        }
    }
}
