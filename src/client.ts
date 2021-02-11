import qs from 'qs'

export class HTTPClient {
    STRIPE_SECRET_KEY: string

    constructor(key: string) {
        this.STRIPE_SECRET_KEY = key
    }

    request = async (
        path: string,
        body: any,
        method: string,
        headers?: object,
    ) : Promise<unknown> => {
        const resp = await fetch(`https://api.stripe.com/v1${path}`, {
            ...(method === 'POST' ? { body: qs.stringify(body) } : {}),
            headers: {
                Authorization: `Bearer ${this.STRIPE_SECRET_KEY}`,
                'Content-type': 'application/x-www-form-urlencoded',
                ...headers,
            },
            method,
        })
    
        return await resp.json()
    }
}
