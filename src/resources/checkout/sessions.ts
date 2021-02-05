import { HttpClient } from "../../HTTPclient"

class Sessions {
    client?: HttpClient
    
    create(params: StripeCheckoutSession) : Promise<StripeCheckoutSessionObject> {
        return this.client!.post('', '') 
    }
    
    retrieve(id: string) : Promise<StripeCheckoutSessionObject> {
        return this.client!.get('')
    }
    
    list(params?: StripeCheckoutListSessionsObject) : Promise<unknown> {
        let url = 'https://api.stripe.com/v1/checkout/sessions?limit=3'
        if (params !== undefined) {
            params.limit
            url = `https://api.stripe.com/v1/checkout/sessions?limit=${params.limit}&ending_before=${params.ending_before}&starting_after=${params.starting_after}&subscription=${params.subsciption}&pyment_intent=${params.payment_intent}`
        }
        return this.client!.get(url)
    }
    
    async listLineItems(params: StripeCheckoutLineitemsObject) : Promise<unknown> {
        return this.client!.get('')
    }
}   

export const sessions = new Sessions()