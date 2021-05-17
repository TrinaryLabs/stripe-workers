import { MandatesReponse } from '../../types'
import { returnToHeaders } from '../../util'
import qs from 'qs'

export namespace mandates {
    export let client: Function

    export function retrieve(
        id: string,
        settings?: {
            stripeAccount?: string
            expand?: Array<string>
        },
    ): Promise<MandatesReponse> {
        return client(
            `/mandates/${id}?${qs.stringify({ expand: settings?.expand })}`,
            {},
            'GET',
            {
                headers: returnToHeaders(settings),
            },
        )
    }
}
