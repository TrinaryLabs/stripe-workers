import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Charge Resource', async () => {
    let lastRequestId = ''
    describe('create', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.charges.create({
                source: 'tok_mastercard',
                amount: 1500,
                currency: 'usd',
                shipping: {
                    name: 'test',
                    address: {
                        line1: 'foo',
                    },
                },
            })

            lastRequestId = response.id

            expect(response.shipping.address.line1).to.equal('foo')
            expect(response.amount).to.equal(1500)
            expect(response.currency).to.equal('usd')
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.charges.update(lastRequestId, {
                description: 'foo321',
            })
            expect(response.shipping.address.line1).to.equal('foo')
            expect(response.amount).to.equal(1500)
            expect(response.currency).to.equal('usd')
            expect(response.description).to.equal('foo321')
        })
    })

    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.charges.retrieve(lastRequestId)

            expect(response.shipping.address.line1).to.equal('foo')
            expect(response.amount).to.equal(1500)
            expect(response.currency).to.equal('usd')
            expect(response.description).to.equal('foo321')
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.charges.list({
                limit: 10
            })

            expect(response.object).to.equal('list')
        })
    })
})
