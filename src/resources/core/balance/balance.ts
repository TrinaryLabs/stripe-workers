import { HttpClient } from "../../../HTTPclient"

class Balance {
    client?: HttpClient
    
    retrieve() : Promise<any> {
        return this.client!.get(`https://api.stripe.com/v1/balance`)
    }
}   

export const balance = new Balance()