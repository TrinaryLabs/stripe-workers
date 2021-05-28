import { expect } from 'chai'
import { stripe } from '../../_setup'

const PAYMENT_INTENT_TEST_ID = 'pi_1DoRpu2eZvKYlo2CWcmf0VuT'

describe('Payment Intents Resource', async () => {
    let lastPaymentId = ''
    describe('create', async () => {
        it('Sends the correct request', async () => {
            const params = {
                amount: 200,
                currency: 'usd',
                payment_method_types: ['card'],
            }
            const response = await stripe.paymentIntents.create(params, {
                idempotencyKey: 'hello123',
            })
            lastPaymentId = response.id

            expect(response.amount).to.equal(200)
            expect(response.currency).to.equal('usd')
        })
    })

    describe('create - with same idempotency key', async () => {
        it('Sends the correct request', async () => {
            const params = {
                amount: 200,
                currency: 'usd',
                payment_method_types: ['card'],
            }
            const response = await stripe.paymentIntents.create(params, {
                idempotencyKey: 'hello123',
            })
            lastPaymentId = response.id

            expect(response.amount).to.equal(200)
            expect(response.currency).to.equal('usd')
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.list({
                limit: 10
            })

            expect(response.object).to.equal('list')
        })
    })

    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.retrieve(
                PAYMENT_INTENT_TEST_ID,
            )

            expect(response.id).to.equal(PAYMENT_INTENT_TEST_ID)
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.update(
                PAYMENT_INTENT_TEST_ID,
                {
                    metadata: { key: 'value' },
                },
            )

            expect(response.id).to.equal(PAYMENT_INTENT_TEST_ID)
        })
    })

    /*
    describe('capture', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.capture(lastPaymentId)

            expect(response.id).to.equal(lastPaymentId)
        })
    })

    describe('confirm', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.confirm(lastPaymentId)

            expect(response.id).to.equal(lastPaymentId)
        })
    })

    describe('cancel', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentIntents.cancel(lastPaymentId)

            expect(response.id).to.equal(lastPaymentId)
        })
    })*/
})
