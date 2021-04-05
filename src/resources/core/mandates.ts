type MandatesReponse = {
    id: string
    customer_acceptance: {
        accepted_at: number
        offline: object,
        online: {
            ip_address: string
            user_agent: string
        }
        type: string
    }
    payment_method: string
    payment_method_details: {
        au_becs_debit: {
            url: string
        }
        bacs_debit: {
            network_status: string
            reference: string
            url: string
        }
        card: object
        sepa_debit: {
            reference: string
            url: string
        }
        type: string
    }
    status: string
    type: string
    object: string
    livemode: boolean
    multi_use: object
    single_use: object
}
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
