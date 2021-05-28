import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Reporting', async () => {
    describe('ReportRuns Resource', async () => {
        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.reporting.reportRuns.retrieve(
                    'frr_1IRav42eZvKYlo2COAZmOkXO',
                )

                expect(response.id).to.equal('frr_1IRav42eZvKYlo2COAZmOkXO')
                expect(response.object).to.equal('reporting.report_run')
            })
        })

        describe('create', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.reporting.reportRuns.create({
                    parameters: {
                        interval_start: 1572307200,
                        interval_end: 1575132800,
                    },
                    report_type: 'balance.summary.1',
                })

                expect(response.object).to.equal('reporting.report_run')
                expect(response.report_type).to.equal('balance.summary.1')
            })
        })

        describe('list', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.reporting.reportRuns.list({
                    limit: 10
                })

                expect(response.url).to.equal('/v1/reporting/report_runs')
                expect(response.object).to.equal('list')
            })
        })
    })

    describe('ReportTypes Resource', async () => {
        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.reporting.reportTypes.retrieve(
                    'balance.summary.1',
                )

                expect(response.object).to.equal('reporting.report_type')
            })
        })

        /*
        Erro => Error: Timeout of 2000ms exceeded
        describe('list', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.reporting.reportTypes.list()

                expect(response.url).to.equal('/v1/reporting/report_types')
                expect(response.object).to.equal('list')
            })
        })
        */
    })
})
