import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('BillingPortal', async () => {
    describe('Configurations Resource', async () => {
        let lastConfigId = ''

        describe('create', async () => {
            it('Sends the correct request', async () => {
                const params = {
                    business_profile: {
                        privacy_policy_url: 'https://example.com/privacy',
                        terms_of_service_url: 'https://example.com/tos',
                    },
                    features: {
                        customer_update: {
                            allowed_updates: ['address'],
                            enabled: true,
                        },
                    },
                }
                let data = await stripe.billingPortal.configurations.create(
                    params,
                )

                lastConfigId = data.id

                expect(data.object).to.equal('billing_portal.configuration')
            })
        })
        describe('update', async () => {
            it('Sends the correct request', async () => {
                const params = {
                    active: false,
                }
                let data = await stripe.billingPortal.configurations.update(
                    lastConfigId,
                    params,
                )

                expect(data.object).to.equal('billing_portal.configuration')
                expect(data.id).to.equal(lastConfigId)
            })
        })
        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.billingPortal.configurations.retrieve(
                    lastConfigId,
                )

                expect(data.object).to.equal('billing_portal.configuration')
                expect(data.id).to.equal(lastConfigId)
            })
        })
        describe('list', async () => {
            it('Sends the correct request', async () => {
                let data = await stripe.billingPortal.configurations.list({
                    limit: 10
                })

                expect(data.url).to.equal(`/v1/billing_portal/configurations`)
            })
        })
    })
    /*
    describe('Sessions Resource', async () => {
        describe('create', async () => {
            it('Sends the correct request', async () => {
                const params = {
                    customer: 'cus_123',
                    return_url: 'https://stripe.com/return'
                }
                let data = await stripe.billingPortal.sessions.create(params.customer, params.return_url)

                expect(data).to.deep.equal({
                    method: 'POST',
                    url: '/v1/billing_portal/sessions',
                    headers: {},
                    data: params,
                    settings: {},
                })
            })
        })
    })
    */
})
