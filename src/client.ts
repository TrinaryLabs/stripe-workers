import qs from 'qs'

export class HTTPClient {
    STRIPE_SECRET_KEY: string
    FETCH: Function

    constructor(key: string, customFetch?: Function) {
        this.STRIPE_SECRET_KEY = key
        this.FETCH = ( customFetch ? customFetch : fetch.bind(globalThis))
        
    }

    request = async (
        path: string,
        body: any,
        method: string,
        headers?: object,
    ) : Promise<unknown> => {
        try {
            const resp = await this.FETCH(`https://api.stripe.com/v1${path}`, {
                ...(method === 'POST' ? { body: qs.stringify(body) } : {}),
                headers: {
                    Authorization: `Bearer ${this.STRIPE_SECRET_KEY}`,
                    'Content-type': 'application/x-www-form-urlencoded',
                    ...headers,
                },
                method,
            })

            const data = await resp.json()

            if (resp.ok) {
                return data
            } else {
                switch (resp.status) {
                    case 400:
                        break;
                    case 401:
                        break;
                    case 402:
                        break;
                    case 403:
                        break;
                    case 404:
                        break;
                    case 409:
                        break;
                    case 429:
                        break;
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        break;
                    default:
                        break;
                }
            }
            
        } catch (error) {
            throw error
        }
    }
}
