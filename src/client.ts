import qs from 'qs'
import { StripeAuthenticationError, StripeError, StripePermissionError, StripeRateLimitError } from './error'

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
            const res = await this.FETCH(`https://api.stripe.com/v1${path}`, {
                ...(method === 'POST' ? { body: qs.stringify(body) } : {}),
                headers: {
                    Authorization: `Bearer ${this.STRIPE_SECRET_KEY}`,
                    'Content-type': 'application/x-www-form-urlencoded',
                    ...headers,
                },
                method,
            })

            const data = await res.json()

            if (res.ok) {
                return data
            } else {
                if (typeof data.error === 'string') {
                    data.error = {
                        type: data.error,
                        message: data.error_description,
                    };
                }
      
                data.error.headers = res.headers;
                data.error.statusCode = res.status;
                data.error.requestId = res.headers['request-id'];

                switch (res.status) {
                    case 401:
                        throw new StripeAuthenticationError(data.error);
                    case 403:
                        throw new StripePermissionError(data.error)
                    case 429:
                        throw new StripeRateLimitError(data.error);
                    default:
                        throw StripeError.generate(data.error);
                }
            }
            
        } catch (error) {
            throw error
        }
    }
}
