import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Checkout', async () => {
    describe('Sessions Resource', async () => {
        let lastCheckoutId = ''

        describe('create', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.checkout.sessions.create(
                    {
                        mode: 'payment',
                        cancel_url: 'https://stripe.com/cancel',
                        client_reference_id: '1234',
                        line_items: [
                            {
                                amount: 123,
                                currency: 'usd',
                                description: 'item 1',
                                images: ['https://stripe.com/img1'],
                                name: 'name',
                                quantity: 2,
                            },
                        ],
                        payment_intent_data: {
                            receipt_email: 'test@stripe.com',
                        },
                        payment_method_types: ['card'],
                        success_url: 'https://stripe.com/success',
                    },
                    {
                        idempotencyKey: 'test12345test',
                    },
                )

                lastCheckoutId = data.id

                expect(data.object).to.equal('checkout.session')
                expect(data.amount_total).to.equal(246)
                expect(data.client_reference_id).to.equal('1234')
            })
        })

        describe('create - with same idempotency key', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.checkout.sessions.create(
                    {
                        mode: 'payment',
                        cancel_url: 'https://stripe.com/cancel',
                        client_reference_id: '1234',
                        line_items: [
                            {
                                amount: 123,
                                currency: 'usd',
                                description: 'item 1',
                                images: ['https://stripe.com/img1'],
                                name: 'name',
                                quantity: 2,
                            },
                        ],
                        payment_intent_data: {
                            receipt_email: 'test@stripe.com',
                        },
                        payment_method_types: ['card'],
                        success_url: 'https://stripe.com/success',
                    },
                    {
                        idempotencyKey: 'test12345test',
                    },
                )

                expect(data.object).to.equal('checkout.session')
                expect(data.amount_total).to.equal(246)
                expect(data.client_reference_id).to.equal('1234')
            })
        })

        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.checkout.sessions.retrieve(
                    lastCheckoutId,
                )

                expect(data.object).to.equal('checkout.session')
                expect(data.amount_total).to.equal(246)
                expect(data.client_reference_id).to.equal('1234')
                expect(data.id).to.equal(lastCheckoutId)
            })
        })

        describe('listLineItems', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.checkout.sessions.listLineItems(
                    lastCheckoutId,
                    {},
                )

                expect(data.url).to.equal(
                    `/v1/checkout/sessions/${lastCheckoutId}/line_items`,
                )
            })
        })
    })
})
