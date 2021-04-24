import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Balance Resource', async () => {
    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.balance.retrieve()

            expect(response.object).to.equal('balance')
        })
    })
})
