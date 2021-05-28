import { expect } from 'chai'
import { stripe } from '../../_setup'

describe('Terminal', async () => {
    let lastLocationId = ''
    let lastReaderId = ''

    describe('ConnectionToken Resource', async () => {
        describe('create', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.connectionTokens.create()

                expect(response.object).to.equal('terminal.connection_token')
            })
        })
    })

    describe('Locations Resource', async () => {
        describe('create', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.locations.create({
                    display_name: 'name',
                    address: {
                        line1: 'line1',
                        country: 'US',
                        postal_code: '12345',
                        state: 'CA',
                        city: 'San Francisco',
                    },
                })

                lastLocationId = response.id

                expect(response.display_name).to.equal('name')
                expect(response.object).to.equal('terminal.location')
                expect(response.address).to.deep.equal({
                    line1: 'line1',
                    country: 'US',
                    postal_code: '12345',
                    line2: '',
                    state: 'CA',
                    city: 'San Francisco',
                })
            })
        })

        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.locations.retrieve(
                    lastLocationId,
                )

                expect(response.id).to.equal(lastLocationId)
                expect(response.object).to.equal('terminal.location')
            })
        })

        describe('update', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.locations.update(
                    lastLocationId,
                    {
                        display_name: 'name1',
                    },
                )

                expect(response.display_name).to.equal('name1')
                expect(response.object).to.equal('terminal.location')
            })
        })

        describe('del', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.locations.del(
                    lastLocationId,
                )

                expect(response.object).to.equal('terminal.location')
                expect(response.id).to.equal(lastLocationId)
            })
        })

        describe('list', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.locations.list({
                    limit: 10
                })

                expect(response.url).to.equal('/v1/terminal/locations')
                expect(response.object).to.equal('list')
            })
        })
    })

    /*
    describe('Readers Resource', async () => {
        describe('create', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.readers.create({
                    registration_code: 'puppies-plug-could',
                    label: 'name',
                    location: 'tml_1234'
                })

                lastReaderId = response.id
                expect(response.label).to.equal('name')
            })
        })

        describe('retrieve', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.readers.retrieve(lastReaderId)

                expect(response.id).to.equal(lastReaderId)
            })
        })

        describe('update', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.readers.update(lastReaderId, {
                    label: 'name1',
                })

                expect(response.id).to.equal(lastReaderId)
                expect(response.label).to.equal('name1')
            })
        })

        describe('del', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.readers.del(lastReaderId)

                expect(response.id).to.equal(lastReaderId)
                expect(response.deleted).to.equal(true)
            })
        })

        describe('list', async () => {
            it('Sends the correct request', async () => {
                const response = await stripe.terminal.readers.list()

                expect(response.url).to.equal('/v1/terminal/readers')
            })
        })
    })*/
})
