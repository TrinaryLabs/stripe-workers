type BalanceResponse = {
    available: [
        {
            amount: number,
            currency: string,
            source_types: {
                bank_account: number,
                card: number,
                fpx: number
            }
        }
    ],
    pending: [
        {
            amount: number,
            currency: string,
            source_types: {
                bank_account: number,
                card: number,
                fpx: number
            }
        }
    ],
    object: string,
    connect_reserved: [
        {
            amount: number,
            currency: string,
            source_types: {
                bank_account: number,
                card: number,
                fpx: number
            }
        }
    ],
    instant_available: [
        {
            amount: number,
            currency: string,
            source_types: {
                bank_account: number,
                card: number,
                fpx: number
            }
        }
    ],
    issuing: {
        available: [
            {
                amount: number,
                currency: string,
                source_types: {
                    bank_account: number,
                    card: number,
                    fpx: number
                }
            }
        ]
    },
    livemode: boolean
}
export namespace balance {
    export let client: Function

    export function retrieve(
        stripeAccount?: string,
    ): Promise<BalanceResponse> {
        return client('/balance', {}, 'GET', {
            headers: stripeAccount ? { 'Stripe-Account': stripeAccount } : {},
        })
    }
}
