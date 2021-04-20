import { expect } from 'chai'
import { stripe } from '../../_setup'

/*
describe('Order Resource', async () => {
    describe('create', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.create({
                currency: 'usd',
                email: 'jenny.rosen@example.com',
                items: [
                    {type: 'sku', parent: 'sku_6z7JdULSnQVcEL'},
                ],
                shipping: {
                    name: 'Jenny Rosen',
                    address: {
                        line1: '1234 Main Street',
                        city: 'San Francisco',
                        state: 'CA',
                        country: 'US',
                        postal_code: '94111',
                    },
                },
            })

            expect(response.currency).to.equal('usd')
            expect(response.shipping).to.deep.equal({
                name: 'Jenny Rosen',
                address: {
                    line1: '1234 Main Street',
                    city: 'San Francisco',
                    state: 'CA',
                    country: 'US',
                    postal_code: '94111',
                },
            })
        })
    })

    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.retrieve('or_1Ce6vg2eZvKYlo2CcQtHtXdu')

            expect(response.currency).to.equal('usd')
            expect(response.shipping).to.deep.equal({
                name: 'Jenny Rosen',
                address: {
                    line1: '1234 Main Street',
                    city: 'San Francisco',
                    state: 'CA',
                    country: 'US',
                    postal_code: '94111',
                },
            })
            expect(response.id).to.equal('or_1Ce6vg2eZvKYlo2CcQtHtXdu')
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.list({
                limit: 3,
            })

            expect(response.url).to.equal('/v1/orders')
        })

        it('Supports filtering by status', async () => {
            const response = await stripe.orders.list({
                status: 'active',
            })
            expect(response.url).to.equal('/v1/orders')
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.update('or_1Ce6vg2eZvKYlo2CcQtHtXdu', { status: 'fulfilled' })
            
            expect(response.id).to.equal('or_1Ce6vg2eZvKYlo2CcQtHtXdu')
            expect(response.status).to.equal('fulfilled')
        })
    })

    describe('pay', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.pay('or_1Ce6vg2eZvKYlo2CcQtHtXdu', {
                source: 'tok_visa'
            })

            expect(response.id).to.equal('or_1Ce6vg2eZvKYlo2CcQtHtXdu')
        })
    })

    describe('returnOrder', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.orders.returnOrder('or_1Ce6vg2eZvKYlo2CcQtHtXdu', {})

            expect(response.id).to.equal('or_1Ce6vg2eZvKYlo2CcQtHtXdu')
        })
    })
})
*/