import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Customers Resource', async () => {
    let lastCusId = ''
    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.customers.retrieve('cus_123')

            expect(response.id).to.equal('cus_123')
            expect(response.object).to.equal('customer')
        })
    })

    describe('create', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.customers.create({ description: 'Some customer' })

            lastCusId = response.id

            expect(response.object).to.equal('customer')
            expect(response.description).to.equal('Some customer')
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.customers.update(lastCusId, {
                description: 'Foo "baz"',
            })

            expect(response.object).to.equal('customer')
            expect(response.description).to.equal('Foo "baz"')
        })
    })

    describe('del', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.customers.del(lastCusId)

            expect(response.deleted).to.equal(true)
            expect(response.object).to.equal('customer')
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.customers.list()

            expect(response.object).to.equal('list')
        })
    })
})
