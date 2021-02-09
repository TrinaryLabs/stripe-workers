
export function toFormUrlEncoded(data: any) : string {

    let lineItemsStr = ''

    for(let i in data.line_items) {
        lineItemsStr += `line_items[${i}][price]=${data.line_items[i].price}&line_items[${i}][quantity]=${data.line_items[i].quantity}&`
    }

    let paymentMethodTypesStr = ''

    for(let i in data.payment_method_types) {
        paymentMethodTypesStr += `payment_method_types[${i}]=${data.payment_method_types[i]}&`
    }

    let str = Object.entries(data)
        .map(([key, value]) => {
            if (key == 'payment_method_types' || key == 'line_items') {} else {
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
            }
        }).join('')

    str += lineItemsStr
    str += paymentMethodTypesStr
    return str
};