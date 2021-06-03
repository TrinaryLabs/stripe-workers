import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Identity', async () => {
    describe('VerificationSession Resource', async () => {
        let lastResponseId = ''
        describe('create', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.create({
                    type: 'document',
                })
                lastResponseId = data.id
                expect(data.object).to.equal('identity.verification_session')
                expect(data.type).to.equal('document')
                
            })
        })

        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.retrieve(lastResponseId)
                
                expect(data.object).to.equal('identity.verification_session')
                expect(data.type).to.equal('document')
            })
        })

        describe('list', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.list({limit: 10})
                
                expect(data.object).to.equal('list')
                expect(data.url).to.equal('/v1/identity/verification_sessions')
            })
        })

        describe('update', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.update(lastResponseId, {
                    metadata: {
                        thing2: 'yes',
                    },
                })

                expect(data.object).to.equal('identity.verification_session')
                expect(data.type).to.equal('document')
            })
        })

        describe('cancel', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.cancel(lastResponseId)

                expect(data.object).to.equal('identity.verification_session')
                expect(data.type).to.equal('document')
                expect(data.status).to.equal('canceled')
            })
        })

        describe('redact', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationSessions.redact(lastResponseId)
                
                expect(data.object).to.equal('identity.verification_session')
                expect(data.type).to.equal('document')
            })
        })
    })
})