import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Identity', async () => {
    describe('VerificationReport Resource', async () => {
        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationReports.retrieve(
                    'vr_1Iqe8i2eZvKYlo2CHa5PuTcK',
                )

                expect(data.object).to.equal('identity.verification_report')
                expect(data.type).to.equal('document')
            })
        })

        describe('list', async () => {
            it('Sends the correct request', async () => {
                const data = await stripe.identity.verificationReports.list({
                    limit: 10,
                })

                expect(data.object).to.equal('list')
                expect(data.url).to.equal('/v1/identity/verification_reports')
            })
        })
    })
})
