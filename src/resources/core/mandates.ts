import { MandatesReponse } from '../../types'
import { returnToHeaders } from '../../util'

export namespace mandates {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: { stripeAccount?: string },
    ): Promise<MandatesReponse> {
        return client(`/mandates/${id}`, {}, 'GET', {
            headers: returnToHeaders(settings),
        })
    }
}
