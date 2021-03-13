export namespace mandates {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<{
        id: string,
        object: string,
        customer_acceptance: object
        livemode: boolean,
        multi_use: object,
        payment_method: string,
        payment_method_details: object
        status: string,
        type: string
      }> {
        return client(`/mandates/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
