import { MandatesReponse } from '../../types'

export namespace mandates {
    export let client: Function

    export function retrieve(
        id: string,
        stripeAccount?: string,
    ): Promise<MandatesReponse> {
        return client(`/mandates/${id}`, {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
