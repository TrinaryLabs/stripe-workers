import { HttpClient } from "../../../HTTPclient"

class BalanceTransactions {
    client?: HttpClient
    
    retrieve(id: string) : Promise<any> {
        return this.client!.get(`https://api.stripe.com/v1/balance_transactions/${id}`)
    }

    list() : Promise<any> {
        //add more parameters
        return this.client!.get(`https://api.stripe.com/v1/balance_transactions/`)
    }
}   

export const balanceTransactions = new BalanceTransactions()