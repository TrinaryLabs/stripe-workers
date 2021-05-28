import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('BalanceTransactions Resource', async () => {
    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.balanceTransactions.retrieve(
                'txn_1032HU2eZvKYlo2CEPtcnUvl',
            )

            expect(response.id).to.equal('txn_1032HU2eZvKYlo2CEPtcnUvl')
            expect(response.object).to.equal('balance_transaction')
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.balanceTransactions.list({
                limit: 10
            })

            expect(response.object).to.equal('list')
        })
    })
})
