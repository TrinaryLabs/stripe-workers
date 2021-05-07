import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('PaymentMethods Resource', async () => {
    let lastResponseId = ''

    describe('create', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentMethods.create({
                type: 'card',
                card: {
                    number: '4242424242424242',
                    exp_month: 4,
                    exp_year: 2022,
                    cvc: '314',
                },
            })
            lastResponseId = response.id

            expect(response.object).to.equal('payment_method')
        })
    })

    describe('retrieve', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentMethods.retrieve(
                lastResponseId,
            )

            expect(response.id).to.equal(lastResponseId)
            expect(response.object).to.equal('payment_method')
        })
    })

    /*
    describe('attach', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentMethods.attach(lastResponseId, { customer: 'cus_9utnW8C6p4Y9Op' })

            expect(response.object).to.equal('payment_method')
        })
    })

    describe('update', async () => {
        it('Sends the correct request', async () => {
            const data = {
                metadata: { key: 'value' },
            }
            const response = await stripe.paymentMethods.update(lastResponseId, data)

            expect(response.id).to.equal(lastResponseId)
            expect(response.object).to.equal('payment_method')
            expect(response.metadata).to.deep.equal({
                key: 'value'
            })
        })
    })

    describe('list', async () => {
        it('Sends the correct request', async () => {
            const data = {
                customer: 'cus_9utnW8C6p4Y9Op',
                type: 'card',
            }
            const response = await stripe.paymentMethods.list(data)

            expect(response.url).to.equal('/v1/payment_methods')
            expect(response.object).to.equal('list')
        })
    })

    describe('detach', async () => {
        it('Sends the correct request', async () => {
            const response = await stripe.paymentMethods.detach(lastResponseId)

            expect(response.id).to.equal(lastResponseId)
            expect(response.object).to.equal('payment_method')
        })
    })*/
})
