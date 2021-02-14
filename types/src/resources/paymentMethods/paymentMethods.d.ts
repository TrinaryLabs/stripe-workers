export declare namespace paymentMethods {
    let client: Function;
    function create(params: {
        type: string;
        billing_details?: object;
        metadata?: [string, unknown];
        alipay?: object;
        au_becs_debit?: object;
        bacs_debit?: object;
        bancontact?: object;
        card?: object;
        eps?: object;
        fpx?: object;
        giropay?: object;
        grabpay?: object;
        ideal?: object;
        interac_present?: object;
        oxxo?: object;
        p24?: object;
        sepa_debit?: object;
        sofort?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function retrieve(id: string, stripeAccount?: string): Promise<unknown>;
    function update(id: string, params: {
        billing_details?: object;
        metadata?: [string, unknown];
        card?: object;
    }, stripeAccount?: string): Promise<unknown>;
    function list(params: {
        customer: string;
        type: string;
        ending_before?: string;
        limit?: number;
        starting_after?: string;
    }, stripeAccount?: string): Promise<unknown>;
    function attach(id: string, params: {
        customer: string;
    }, stripeAccount?: string): Promise<unknown>;
    function detach(id: string, stripeAccount?: string): Promise<unknown>;
}
//# sourceMappingURL=paymentMethods.d.ts.map