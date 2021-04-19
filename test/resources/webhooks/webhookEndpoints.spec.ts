//import { expect } from 'chai'
//import { stripe } from '../../_setup'

/*
Error: This account is not allowed to manage webhook endpoints via the API.

describe('WebhookEndpoints Resource', async () => {
    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.webhookEndpoints.retrieve('we_1IhSkj2eZvKYlo2COxOVqVBt')

            expect(response.object).to.equal('webhook_endpoints')
            expect(response.id).to.equal('we_1IhSkj2eZvKYlo2COxOVqVBt')
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.webhookEndpoints.update('we_1IhSkj2eZvKYlo2COxOVqVBt', {
                url: 'https://example.com',
                enabled_events: ['charge.succeeded'],
            })

            expect(response.object).to.equal('webhook_endpoints')
            expect(response.id).to.equal('we_1IhSkj2eZvKYlo2COxOVqVBt')
            expect(response.enabled_events).to.equal(['charge.succeeded'])
        })
    })

    describe('del', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.webhookEndpoints.del('we_1IhSkj2eZvKYlo2COxOVqVBt')

            expect(response.deleted).to.equal(true)
            expect(response.object).to.equal('webhook_endpoints')
            expect(response.id).to.equal('we_1IhSkj2eZvKYlo2COxOVqVBt')
        })
    })

    describe('create', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.webhookEndpoints.create({
                enabled_events: ['charge.succeeded'],
                url: 'https://stripe.com',
            })

            expect(response.object).to.equal('webhook_endpoints')
            expect(response.url).to.equal('https://stripe.com')
            expect(response.enabled_events).to.equal(['charge.succeeded'])
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.webhookEndpoints.list()
            
            expect(response.object).to.equal('webhook_endpoints')
        })
    })
})
*/
