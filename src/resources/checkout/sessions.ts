import { HttpClient } from "../../HTTPclient"
import { toFormUrlEncoded } from '../../helpers'

class Sessions {
    client?: HttpClient
    
    create(params: StripeCheckoutSession) : Promise<StripeCheckoutSessionObject> {
        let data = toFormUrlEncoded(params)

        return this.client!.post('https://api.stripe.com/v1/checkout/sessions', data) 
    }
    
    retrieve(id: string) : Promise<StripeCheckoutSessionObject> {
        return this.client!.get(`https://api.stripe.com/v1/checkout/sessions/${id}`)
    }
    
    list(params?: StripeCheckoutListSessionsObject) : Promise<unknown> {
        let url = 'https://api.stripe.com/v1/checkout/sessions?limit=3'
        if (params !== undefined) {
            params.limit
            url = `https://api.stripe.com/v1/checkout/sessions?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}&subscription=${params.subsciption}&pyment_intent=${params.payment_intent}`
        }
        return this.client!.get(url)
    }
    
    listLineItems(params: StripeCheckoutLineitemsObject) : Promise<unknown> {
        return this.client!.get(`https://api.stripe.com/v1/checkout/sessions/${params.id}/line_items?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}`)
    }
}   

export const sessions = new Sessions()