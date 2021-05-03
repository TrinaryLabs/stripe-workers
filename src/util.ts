export function returnToHeaders(params?: {
    stripeAccount?: string,
    idempotencyKey?: string 
}) : object {
    var obj = {
        'Stripe-Account': params?.stripeAccount,
        'Idempotency-Key': params?.idempotencyKey
    }

    if (params?.idempotencyKey == '' || params?.idempotencyKey == undefined) { delete obj["Idempotency-Key"]}
    if (params?.stripeAccount == '' || params?.stripeAccount == undefined) { delete obj["Stripe-Account"]}

    return obj
}