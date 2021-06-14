export type VerificationReportResponse = {
    id: string
    object: string
    created: number
    document: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        dob: {
            day: number
            month: number
            year: number
        }
        error: {
            code: string
            reason: string
        }
        expiration_date: {
            day: number
            month: number
            year: number
        }
        files: Array<string>
        first_name: string
        issued_date: {
            day: number
            month: number
            year: number
        }
        issuing_country: string
        last_name: string
        number: string
        status: string
        type: string
    }
    id_number: {
        dob: {
            day: number
            month: number
            year: number
        }
        error: {
            code: string
            reason: string
        }
        first_name: string
        id_number: string
        id_number_type: string
        last_name: string
        status: string
    }
    livemode: boolean
    options: {
        document: {
            allowed_types: Array<string>
            require_id_number: boolean
            require_live_capture: boolean
            require_matching_selfie: boolean
        }
        id_number: {}
    }
    selfie: {
        document: string
        error: {
            code: string
            reason: string
        }
        selfie: string
        status: string
    }
    type: string
    verification_session: string
}

export type VerificationSessionResponse = {
    id: string
    object: string
    client_secret: string
    created: number
    last_error: {
        code: string
        reason: string
    }
    last_verification_report: string
    livemode: boolean
    metadata: object
    options: {
        document: {
            allowed_types: Array<string>
            require_id_number: boolean
            require_live_capture: boolean
            require_matching_selfie: boolean
        }
        id_number: {}
    }
    redaction: {
        status: string
    }
    status: string
    type: string
    url: string
    verified_outputs: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        dob: {
            day: number
            month: number
            year: number
        }
        first_name: string
        id_number: string
        id_number_type: string
    }
}

export type BillingPortalResponse = {
    id: string
    object: string
    configuration: string | BillingPortalConfigurationResponse
    created: number
    customer: string
    livemode: boolean
    on_behalf_of: string
    return_url: string
    url: string
}

export type BillingPortalConfigurationResponse = {
    id: string
    object: string
    active: boolean
    application: string
    business_profile: {
        headline: string
        privacy_policy_url: string
        terms_of_service_url: string
    }
    created: number
    default_return_url: string
    features: {
        customer_update: {
            allowed_updates: Array<string>
            enabled: boolean
        }
        invoice_history: {
            enabled: boolean
        }
        payment_method_update: {
            enabled: boolean
        }
        subscription_cancel: {
            enabled: boolean
            mode: string
            proration_behavior: string
        }
        subscription_pause: {
            enabled: boolean
        }
        subscription_update: {
            default_allowed_updates: Array<string>
            enabled: boolean
            proration_behavior: string
            products: [
                {
                    price: string
                    product: string
                },
            ]
        }
    }
    is_default: boolean
    livemode: boolean
    updated: number
}

export type CouponsResponse = {
    id: string
    amount_off: number
    currency: string
    duration: string
    duration_in_months: number
    metadata: object
    name: string
    percent_off: number
    object: string
    applies_to: {
        products: [string]
    }
    created: number
    livemode: boolean
    max_redemptions: number
    redeem_by: number
    times_redeemed: number
    valid: boolean
}

export type CreditNotesLines = {
    id: string
    object: string
    amount: number
    description: string
    discount_amount: number
    discount_amounts: [
        {
            amount: number
            discount: string
        },
    ]
    invoice_line_item: string
    livemode: boolean
    quantity: number
    tax_amounts: [
        {
            amount: number
            inclusive: boolean
            tax_rate: string
        },
    ]
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            created: number
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        },
    ]
    type: string
    unit_amount: number
    unit_amount_decimal: string
}

export type CreditNotesResponse = {
    id: string
    currency: string
    invoice: string
    lines: {
        object: string
        data: [CreditNotesLines]
        has_more: boolean
        url: string
    }
    memo: string
    metadata: object
    reason: string
    status: string
    subtotal: number
    total: number
    object: string
    amount: number
    created: number
    customer: string | CustomersResponse
    customer_balance_transaction: string | CustomerBalanceTransactionResponse
    discount_amount: number
    discount_amounts: [
        {
            amount: number
            discount: string
        },
    ]
    livemode: boolean
    number: string
    out_of_band_amount: number
    pdf: string
    refund: string | RefundsResponse
    tax_amounts: [
        {
            amount: number
            inclusive: boolean
            tax_rate: string | TaxRatesResponse
        },
    ]
    type: string
    voided_at: number
}

export type InvoiceItemsResponse = {
    id: string
    object: string
    amount: number
    currency: string
    customer: string
    date: number
    description: string
    discountable: boolean
    discounts: [string]
    invoice: string
    livemode: boolean
    metadata: object
    period: {
        end: number
        start: number
    }
    price: {
        id: string
        object: string
        active: boolean
        billing_scheme: string
        created: number
        currency: string
        livemode: boolean
        lookup_key: string
        metadata: object
        nickname: string
        product: string
        recurring: {
            aggregate_usage: string
            interval: string
            interval_count: number
            usage_type: string
        }
        tiers: [
            {
                flat_amount: number
                flat_amount_decimal: string
                unit_amount: number
                unit_amount_decimal: string
                up_to: number
            },
        ]
        tiers_mode: string
        transform_quantity: {
            divide_by: number
            round: string
        }
        type: string
        unit_amount: number
        unit_amount_decimal: string
    }
    proration: boolean
    quantity: number
    subscription: string
    subscription_item: string
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            created: number
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        },
    ]
    unit_amount: number
    unit_amount_decimal: string
}

export type InvoicesResponse = {
    id: string
    object: string
    account_country: string
    account_name: string
    account_tax_ids: [string]
    amount_due: number
    amount_paid: number
    amount_remaining: number
    application_fee_amount: number
    attempt_count: number
    attempted: boolean
    auto_advance: boolean
    billing_reason: string
    charge: string
    collection_method: string
    created: number
    currency: string
    custom_fields: [
        {
            name: string
            value: string
        },
    ]
    customer: string
    customer_address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    customer_email: string
    customer_name: string
    customer_phone: string
    customer_shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        name: string
        phone: string
    }
    customer_tax_exempt: string
    customer_tax_ids: [
        {
            type: string
            value: string
        },
    ]
    default_payment_method: string
    default_source: string
    default_tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        },
    ]
    description: string
    discount: object
    discounts: [string]
    due_date: number
    ending_balance: number
    footer: string
    hosted_invoice_url: string
    invoice_pdf: string
    last_finalization_error: {
        code: string
        doc_url: string
        message: string
        param: string
        payment_method_type: string
        type: string
    }
    lines: {
        data: [InvoiceItemsResponse]
        has_more: boolean
        object: string
        url: string
    }
    livemode: boolean
    metadata: object
    next_payment_attempt: number
    number: string
    on_behalf_of: string
    paid: boolean
    payment_intent: string
    payment_settings: {
        payment_method_options: {
            bancontact: {
                preferred_language: string
            }
            card: {
                request_three_d_secure: string
            }
        }
        payment_method_types: [string]
    }
    period_end: number
    period_start: number
    post_payment_credit_notes_amount: number
    pre_payment_credit_notes_amount: number
    receipt_number: string
    starting_balance: number
    statement_descriptor: string
    status: string
    status_transitions: {
        finalized_at: number
        marked_uncollectible_at: number
        paid_at: number
        voided_at: number
    }
    subscription: string
    subtotal: number
    tax: number
    total: number
    total_discount_amounts: [
        {
            amount: number
            discount: string
        },
    ]
    total_tax_amounts: [
        {
            amount: number
            inclusive: boolean
            tax_rate: string
        },
    ]
    transfer_data: {
        amount: number
        destination: string
    }
    webhooks_delivered_at: number
}

export type PlansResponse = {
    id: string
    object: string
    active: boolean
    aggregate_usage: string
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: object
    nickname: string
    product: string
    tiers_mode: [
        {
            flat_amount: number
            flat_amount_decimal: string
            unit_amount: number
            unit_amount_decimal: string
            up_to: number
        },
    ]
    transform_usage: {
        divide_by: number
        round: string
    }
    trial_period_days: number
    usage_type: string
}

export type PromotionCodesResponse = {
    id: string
    object: string
    active: boolean
    code: string
    coupon: string | object
    created: number
    customer: string
    expires_at: number
    livemode: boolean
    max_redemptions: number
    metadata: object
    restrictions: {
        first_time_transaction: boolean
        minimum_amount: number
        minimum_amount_currency: string
    }
    times_redeemed: number
}

export type SubscriptionItemsResponse = {
    id: string
    object: string
    billing_thresholds: {
        usage_gte: number
    }
    created: number
    metadata: object
    price: {
        id: string
        object: string
        active: boolean
        billing_scheme: string
        created: number
        currency: string
        livemode: boolean
        lookup_key: string
        metadata: object
        nickname: string
        product: string
        recurring: {
            aggregate_usage: string
            interval: string
            interval_count: number
            usage_type: string
        }
        tiers: [
            {
                flat_amount: number
                flat_amount_decimal: string
                unit_amount: number
                unit_amount_decimal: string
                up_to: number
            },
        ]
        tiers_mode: string
        transform_quantity: {
            divide_by: number
            round: string
        }
        type: string
        unit_amount: number
        unit_amount_decimal: string
    }
    quantity: number
    subscription: string
    tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        },
    ]
}

export type UsageRecordsResponse = {
    id: string
    object: string
    livemode: boolean
    quantity: number
    subscription_item: string
    timestamp: number
}

export type SubscriptionResponse = {
    id: string
    object: string
    application_fee_percent: number
    billing_cycle_anchor: number
    billing_thresholds: {
        amount_gte: number
        reset_billing_cycle_anchor: boolean
    }
    cancel_at: number
    cancel_at_period_end: boolean
    canceled_at: number
    collection_method: string
    created: number
    current_period_end: number
    current_period_start: number
    customer: string
    days_until_due: number
    default_payment_method: string
    default_source: string
    default_tax_rates: [
        {
            id: string
            object: string
            active: boolean
            country: string
            created: number
            description: string
            display_name: string
            inclusive: boolean
            jurisdiction: string
            livemode: boolean
            metadata: object
            percentage: number
            state: string
        },
    ]
    discount: object //discount
    ended_at: number
    items: {
        object: string
        data: [object]
        has_more: boolean
        url: string
    }
    latest_invoice: string
    livemode: boolean
    metadata: object
    next_pending_invoice_item_invoice: number
    pause_collection: {
        behavior: string
        resumes_at: number
    }
    pending_invoice_item_interval: {
        interval: string
        interval_count: number
    }
    pending_setup_intent: string
    pending_update: {
        billing_cycle_anchor: number
        expires_at: number
        subscription_items: [object] //todo items
        trial_end: number
        trial_from_plan: boolean
    }
    schedule: string
    start_date: number
    status: string
    transfer_data: {
        amount_percent: number
        destination: string
    }
    trial_end: number
    trial_start: number
}

export type SubscriptionSchedulesResponse = {
    id: string
    object: string
    canceled_at: number
    completed_at: number
    created: number
    current_phase: {
        end_date: number
        start_date: number
    }
    customer: string
    default_settings: {
        application_fee_percent: number
        billing_cycle_anchor: string
        billing_thresholds: {
            amount_gte: number
            reset_billing_cycle_anchor: boolean
        }
        collection_method: string
        default_payment_method: string
        invoice_settings: {
            days_until_due: number
        }
        transfer_data: {
            amount_percent: number
            destination: string
        }
    }
    end_behavior: string
    livemode: boolean
    metadata: object
    phases: [object]
    released_at: number
    released_subscription: string
    status: string
    subscription: string
}

export type TaxRatesResponse = {
    id: string
    object: string
    active: boolean
    country: string
    created: number
    description: string
    display_name: string
    inclusive: boolean
    jurisdiction: string
    livemode: boolean
    metadata: object
    percentage: number
    state: string
}

export type AccountLinksResponse = {
    object: string
    created: number
    expires_at: number
    url: string
}

export type CheckoutSessionsResponse = {
    id: string
    cancel_url: string
    client_reference_id: string | undefined
    customer: string | undefined
    customer_email: string | undefined
    line_items: {}
    metadata: object
    mode: string
    payment_intent: string | PaymentIntentsResponse
    payment_method_types: [string]
    payment_status: string
    success_url: string
    object: string
    allow_promotion_codes: boolean | undefined
    amount_subtotal: number | undefined
    amount_total: number | undefined
    automatic_tax: {
        enabled: boolean
        status: string
    }
    billing_address_collection: string
    currency: string | undefined
    customer_details: {
        email: string
        tax_exempt: string
        tax_ids: [
            {
                type: string
                value: string
            },
        ]
    }
    livemode: boolean
    locale: string | undefined
    payment_method_options: {
        acss_debit: {
            currency: string
            mandate_options: {
                verification_method: string
            }
        }
    }
    setup_intent: string | undefined
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        name: string
    }
    shipping_address_collection: {
        allowed_countries: [string]
    }
    submit_type: string | undefined
    subscription: string
    tax_id_collection: {
        enabled: boolean
    }
    total_details: {
        amount_discount: number
        amount_shipping: number
        amount_tax: number
        breakdown: {
            discounts: [
                {
                    amount: number
                    discount: object
                },
            ]
            taxes: [
                {
                    amount: number
                    rate: {
                        id: string
                        object: string
                        active: boolean
                        country: string
                        created: number
                        description: string
                        display_name: string
                        inclusive: boolean
                        jurisdiction: string
                        livemode: boolean
                        metadata: object
                        percentage: number
                        state: string
                    }
                },
            ]
        }
    }
}

export type AccountsResponse = {
    id: string
    business_type: string
    capabilities: {
        acss_debit_payments: string
        afterpay_clearpay_payments: string
        au_becs_debit_payments: string
        bacs_debit_payments: string
        bancontact_payments: string
        card_issuing: string
        card_payments: string
        cartes_bancaires_payments: string
        eps_payments: string
        fpx_payments: string
        giropay_payments: string
        grabpay_payments: string
        ideal_payments: string
        jcb_payments: string
        legacy_payments: string
        oxxo_payments: string
        p24_payments: string
        sepa_debit_payments: string
        sofort_payments: string
        tax_reporting_us_1099_k: string
        tax_reporting_us_1099_misc: string
        transfers: string
    }
    company: {}
    country: string
    email: string
    individual: {}
    metadata: object
    requirements: object
    tos_acceptance: {
        date: number
        ip: string
        service_agreement: string
        user_agent: string
    }
    type: string
    object: string
    business_profile: {
        mcc: string
        name: string
        product_description: string
        support_address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        support_email: string
        support_phone: string
        support_url: string
        terms_of_service_url: string
        url: string
    }
    charges_enabled: boolean
    created: number
    default_currency: string
    details_submitted: boolean
    external_accounts: {
        object: string
        data: [
            {
                id: string
                object: string
                account: string
                address_city: string
                address_country: string
                address_line1: string
                address_line1_check: string
                address_line2: string
                address_state: string
                address_zip: string
                address_zip_check: string
                available_payout_methods: []
                brand: string
                country: string
                currency: string
                customer: string
                cvc_check: string
                default_for_currency: boolean
                dynamic_last4: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                last4: string
                metadata: object
                name: string
                recipient: string
                tokenization_method: string
                account_holder_name: string
                account_holder_type: string
                bank_name: string
                routing_number: string
                status: string
            },
        ]
        has_more: boolean
        url: string
    }
    payouts_enabled: boolean
    settings: {
        bacs_debit_payments: {
            display_name: string
        }
        branding: {
            icon: string
            logo: string
            primary_color: string
            secondary_color: string
        }
        card_issuing: {
            tos_acceptance: {
                date: number
                ip: string
                user_agent: string
            }
        }
        card_payments: {
            decline_on: {
                avs_failure: boolean
                cvc_failure: boolean
            }
            statement_descriptor_prefix: string
        }
        dashboard: {
            display_name: string
            timezone: string
        }
        payments: {
            statement_descriptor: string
            statement_descriptor_kana: string
            statement_descriptor_kanji: string
        }
        payouts: {
            debit_negative_balances: boolean
            schedule: {
                delay_days: number
                interval: string
                monthly_anchor: number
                weekly_anchor: string
            }
            statement_descriptor: string
        }
        sepa_debit_payments: {
            creditor_id: string
        }
    }
}

export type AccountsCapabilityResponse = {
    id: string
    account: string
    requested: boolean
    requirements: {
        current_deadline: number
        currently_due: [string]
        disabled_reason: string
        errors: [
            {
                code: string
            },
        ]
        eventually_due: [string]
        past_due: [string]
        pending_verification: [string]
    }
    status: string
    object: string
    requested_at: number
}

export type PersonResponse = {
    id: string
    account: string
    address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    dob: {
        day: number
        month: number
        year: number
    }
    email: string
    first_name: string
    last_name: string
    metadata: object
    phone: string
    relationship: {
        director: boolean
        executive: boolean
        owner: boolean
        percent_ownership: number
        representative: boolean
        title: string
    }
    requirements: {
        currently_due: [string]
        errors: [
            {
                code: string
                reason: string
                requirement: string
            },
        ]
        eventually_due: [string]
        past_due: [string]
        pending_verification: [string]
    }
    object: string
    address_kana: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
        town: string
    }
    address_kanji: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
        town: string
    }
    created: number
    first_name_kana: string
    first_name_kanji: string
    gender: string
    id_number_provided: boolean
    last_name_kana: string
    last_name_kanji: string
    maiden_name: string
    nationality: string
    political_exposure: string
    ssn_last_4_provided: boolean
    verification: {
        additional_document: {
            back: string | FilesResponse
            details: string
            details_code: string
            front: string | FilesResponse
        }
        details: string
        details_code: string
        document: {
            back: string | FilesResponse
            details: string
            details_code: string
            front: string | FilesResponse
        }
        status: string
    }
}

export type AccountBankAccountResponse = {
    id: string
    object: string
    account_holder_name: string
    account_holder_type: string
    bank_name: string
    country: string
    currency: string
    fingerprint: string
    last4: string
    metadata: object
    routing_number: string
    status: string
    account: string
}

export type AccountCardResponse = {
    id: string
    object: string
    address_city: string
    address_country: string
    address_line1: string
    address_line1_check: string
    address_line2: string
    address_state: string
    address_zip: string
    address_zip_check: string
    brand: string
    country: string
    cvc_check: string
    dynamic_last4: string
    exp_month: number
    exp_year: number
    fingerprint: string
    funding: string
    last4: string
    metadata: object
    name: string
    tokenization_method: string
    account: string
}

export type ApplicationFeesResponse = {
    id: string
    object: string
    account: string
    amount: number
    amount_refunded: number
    application: string
    balance_transaction: string
    charge: string
    created: number
    currency: string
    livemode: boolean
    originating_transaction: string
    refunded: boolean
    refunds: {
        object: string
        data: [
            {
                id: string
                object: string
                amount: number
                balance_transaction: string
                created: number
                currency: string
                fee: string
                metadata: object
            },
        ]
        has_more: boolean
        url: string
    }
}

export type ApplicationFeesRefundResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: string
    created: number
    currency: string
    fee: string
    metadata: object
}

export type CountrySpecsResponse = {
    id: string
    object: string
    default_currency: string
    supported_bank_account_currencies: object
    supported_payment_currencies: [string]
    supported_payment_methods: [string]
    supported_transfer_countries: [string]
    verification_fields: {
        company: {
            additional: [string]
            minimum: [string]
        }
        individual: {
            additional: [string]
            minimum: [string]
        }
    }
}

export type TopUpsResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: string
    created: number
    currency: string
    description: string
    expected_availability_date: number
    failure_code: string
    failure_message: string
    livemode: boolean
    metadata: object
    source: object
    statement_descriptor: string | unknown
    status: string
    transfer_group: string
}

export type TransfersResponse = {
    id: string
    object: string
    amount: number
    amount_reversed: number
    balance_transaction: string
    created: number
    currency: string
    description: string
    destination: string
    destination_payment: string
    livemode: boolean
    metadata: object
    reversals: object
    reversed: boolean
    source_transaction: string
    source_type: string
    transfer_group: string
}

export type TransfersReversalResponse = {
    id: string
    object: string
    amount: number
    balance_transaction: string
    created: number
    currency: string
    destination_payment_refund: string
    metadata: object
    source_refund: string
    transfer: string
}

export type EarlyFraudWarningsResponse = {
    id: string
    object: string
    actionable: boolean
    charge: string
    created: number
    fraud_type: string
    livemode: boolean
}

export type ValueListResponse = {
    id: string
    object: string
    alias: string
    created: number
    created_by: string
    item_type: string
    list_items: {
        object: string
        data: []
        has_more: boolean
        url: string
    }
    livemode: boolean
    metadata: object
    name: string
}

export type ValueListItemsResponse = {
    id: string
    object: string
    created: number
    created_by: string
    livemode: boolean
    value: string
    value_list: string
}

export type ReviewsResponse = {
    id: string
    object: string
    billing_zip: string
    charge: string
    closed_reason: string
    created: number
    ip_address: string
    ip_address_location: {
        city: string
        country: string
        latitude: number
        longitude: number
        region: string
    }
    livemode: boolean
    open: boolean
    opened_reason: string
    reason: string
    session: {
        browser: string
        device: string
        platform: string
        version: string
    }
}

export type BalanceTransactionsResponse = {
    id: string
    object: string
    amount: number
    available_on: number
    created: number
    currency: string
    description: string
    exchange_rate: number
    fee: number
    fee_details: [
        {
            amount: number
            application: string
            currency: string
            description: string
            type: string
        },
    ]
    net: number
    reporting_category: string
    source: string
    status: string
    type: string
}

export type AuthorizationsResponse = {
    id: string
    amount: number
    approved: boolean
    card: CardsResponse
    cardholder: string
    currency: string
    metadata: object
    status: string
    object: string
    amount_details: {
        atm_fee: number
    }
    authorization_method: string
    balance_transactions: [BalanceTransactionsResponse]
    created: number
    livemode: boolean
    merchant_amount: number
    merchant_currency: string
    merchant_data: {
        category: string
        city: string
        country: string
        name: string
        network_id: string
        postal_code: string
        state: string
    }
    pending_request: {
        amount: number
        amount_details: {
            atm_fee: number
        }
        currency: string
        is_amount_controllable: boolean
        merchant_amount: number
        merchant_currency: string
    }
    request_history: [
        {
            amount: number
            amount_details: {
                atm_fee: number
            }
            approved: boolean
            created: number
            currency: string
            merchant_amount: number
            merchant_currency: string
            reason: string
        },
    ]
    transactions: [TransactionsResponse]
    verification_data: {
        address_line1_check: string
        address_postal_code_check: string
        cvc_check: string
        expiry_check: string
    }
    wallet: string
}

export type CardholdersResponse = {
    id: string
    billing: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
    }
    email: string
    metadata: object
    name: string
    phone_number: string
    type: string
    object: string
    company: {
        tax_id_provided: boolean
    }
    created: number
    individual: {
        dod: {
            day: number
            month: number
            year: number
        }
        first_name: string
        last_name: string
        verification: {
            document: {
                back: string
                front: string
            }
        }
    }
    livemode: boolean
    requirements: {
        disabled_reason: string
        past_due: [string]
    }
    spending_controls: {
        allowed_categories: [string]
        blocked_categories: [string]
        spending_limits: [
            {
                amount: number
                categories: [string]
                interval: string
            },
        ]
        spending_limits_currency: string
    }
    status: string
}

export type CardsResponse = {
    id: string
    cancellation_reason: string
    cardholder: CardholdersResponse
    currency: string
    exp_month: number
    exp_year: number
    last4: string
    metadata: object
    status: string
    type: string
    object: string
    brand: string
    created: number
    cvc: string
    livemode: boolean
    number: string
    replaced_by: string
    replacement_for: string
    replacement_reason: string
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        eta: number
        name: string
        service: string
        status: string
        tracking_number: string
        tracking_url: string
        type: string
    }
    spending_controls: {
        allowed_categories: [string]
        blocked_categories: [string]
        spending_limits: [
            {
                amount: number
                categories: [string]
                interval: string
            },
        ]
        spending_limits_currency: string
    }
}

export type DisputesResponse = {
    id: string
    amount: number
    balance_transactions: [BalanceTransactionsResponse]
    currency: string
    evidence: {
        canceled: {
            additional_documentation: string
            canceled_at: number
            cancellation_policy_provided: boolean
            cancellation_reason: string
            expected_at: number
            explanation: string
            product_description: string
            product_type: string
            return_status: string
            returned_at: number
        }
        duplicate: {
            additional_documentation: string
            card_statement: string
            cash_receipt: string
            check_image: string
            explanation: string
            original_transaction: string
        }
        fraudulent: {
            additional_documentation: string
            explanation: string
        }
        merchandise_not_as_described: {
            additional_documentation: string
            explanation: string
            received_at: number
            return_description: string
            return_status: string
            returned_at: number
        }
        not_received: {
            additional_documentation: string
            expected_at: number
            explanation: string
            product_description: string
            product_type: string
        }
        other: {
            additional_documentation: string
            explanation: string
            product_description: string
            product_type: string
        }
        reason: string
        service_not_as_described: {
            additional_documentation: string
            canceled_at: number
            cancellation_reason: string
            explanation: string
            received_at: number
        }
    }
    metadata: object
    status: string
    transaction: string
    object: string
    created: number
    livemode: boolean
}

export type TransactionsResponse = {
    id: string
    amount: number
    authorization: string
    card: string
    cardholder: string
    currency: string
    metadata: object
    type: string
    object: string
    amount_details: {
        atm_fee: number
    }
    balance_transaction: string
    created: number
    dispute: string
    livemode: boolean
    merchant_amount: number
    merchant_currency: string
    merchant_data: {
        category: string
        city: string
        country: string
        name: string
        network_id: string
        postal_code: string
        state: string
    }
    purchase_details: {
        flight: {
            departure_at: number
            passenger_name: string
            refundable: boolean
            segments: {
                arrival_airport_code: string
                carrier: string
                departure_airport_code: string
                flight_number: string
                service_class: string
                stopover_allowed: boolean
            }
            travel_agency: string
        }
        fuel: {
            type: string
            unit: string
            unit_cost_decimal: string
            volume_decimal: string
        }
        lodging: {
            check_in_at: number
            nights: number
        }
        receipt: {
            description: string
            quantity: number
            total: number
            unit_cost: number
        }
        reference: string
    }
}

export type OrderReturnsResponse = {
    id: string
    amount: number
    currency: string
    items: [
        {
            object: string
            amount: number
            currency: string
            description: string
            parent: string
            quantity: number
            type: string
        },
    ]
    order: string
    refund: string
    object: string
    created: number
    livemode: boolean
}

export type OrdersResponse = {
    id: string
    amount: number
    charge: string
    currency: string
    customer: string
    email: string
    items: [
        {
            object: string
            amount: number
            currency: string
            description: string
            parent: string
            quantity: number
            type: string
        },
    ]
    metadata: object
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    status: string
    object: string
    amount_returned: number
    application: string
    application_fee: number
    created: number
    external_coupon_code: string
    livemode: boolean
    returns: {
        object: string
        data: [
            {
                id: string
                object: string
                amount: number
                created: number
                currency: string
                items: [
                    {
                        object: string
                        amount: number
                        currency: string
                        description: string
                        parent: string
                        quantity: number
                        type: string
                    },
                ]
                livemode: boolean
                order: string
                refund: string
            },
        ]
        has_more: boolean
        url: string
    }
    selected_shipping_method: string
    shipping_methods: [
        {
            id: string
            amount: number
            currency: string
            delivery_estimate: {
                date: string
                earliest: string
                latest: string
                type: string
            }
            description: string
        },
    ]
    status_transitions: {
        canceled: number
        fulfiled: number
        paid: number
        returned: number
    }
    updated: number
    upstream_id: string
}

export type SKUResponse = {
    id: string
    active: boolean
    attributes: object
    currency: string
    image: string
    inventory: {
        quantity: number
        type: string
        value: string
    }
    metadata: object
    price: number
    product: string
    object: string
    created: number
    livemode: boolean
    package_dimensions: {
        height: number
        length: number
        weight: number
        width: number
    }
    updated: number
}

export type PaymentMethodsResponse = {
    id: string
    billing_details: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        email: string
        name: string
        phone: string
    }
    customer: string
    metadata: object
    type: string
    object: string
    afterpay_clearpay: {}
    alipay: {}
    au_becs_debit: {
        bsb_number: string
        fingerprint: string
        last4: string
    }
    bacs_debit: {
        fingerprint: string
        last4: string
        sort_code: string
    }
    bancontact: {}
    card: {
        brand: string
        checks: {
            address_line1_check: string
            address_postal_code_check: string
            cvc_check: string
        }
        country: string
        exp_month: number
        exp_year: number
        fingerprint: string
        funding: string
        generated_from: {
            charge: string
            card_present: {
                brand: string
                cardholder_name: string
                country: string
                emv_auth_data: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                generated_card: string
                last4: string
                network: string
                read_method: string
                receipt: {
                    account_type: string
                    application_cryptogram: string
                    application_preferred_name: string
                    authorization_code: string
                    authorization_response_code: string
                    cardholder_verification_method: string
                    dedicated_file_name: string
                    terminal_verification_results: string
                    transaction_status_information: string
                }
                type: string
            }
            setup_attempt: string
        }
        last4: string
        networks: {
            available: [string]
            preferred: string
        }
        three_d_secure_usage: {
            supported: boolean
        }
        wallet: {
            amex_express_checkout: {}
            apple_pay: {}
            dynamic_last4: string
            google_pay: {}
            masterpass: {
                billing_address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                shipping_address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
            }
            samsung_pay: {}
            type: string
            visa_checkout: {
                billing_address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                shipping_address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
            }
        }
    }
    card_present: {}
    created: number
    eps: {
        bank: string
    }
    fpx: {
        bank: string
    }
    giropay: {}
    grabpay: {}
    ideal: {
        bank: string
        bic: string
    }
    interac_present: {}
    livemode: boolean
    oxxo: {}
    p24: {
        bank: string
    }
    sepa_debit: {
        bank_code: string
        branch_code: string
        country: string
        fingerprint: string
        generated_from: {
            charge: string
            setup_attempt: string
        }
        last4: string
    }
    sofort: {
        country: string
    }
}

export type SourcesResponse = {
    id: string
    amount: number
    currency: string
    customer: string
    metadata: object
    owner: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        email: string
        name: string
        phone: string
        verified_address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        verified_email: string
        verified_name: string
        verified_phone: string
    }
    redirect: {
        failure_reason: string
        return_url: string
        status: string
        url: string
    }
    statement_descriptor: string
    status: string
    type: string
    object: string
    client_secret: string
    code_verification: {
        attempts_remaining: number
        status: string
    }
    created: number
    flow: string
    livemode: boolean
    receiver: {
        address: string
        amount_charged: number
        amount_received: number
        amount_returned: number
        refund_attributes_method: string
        refund_attributes_status: string
    }
    source_order: {
        amount: number
        currency: string
        email: string
        items: [
            {
                amount: number
                currency: string
                description: string
                parent: string
                quantity: number
                type: string
            },
        ]
        shipping: {
            address: {
                city: string
                country: string
                line1: string
                line2: string
                postal_code: string
                state: string
            }
            carrier: string
            name: string
            phone: string
            tracking_number: string
        }
    }
    usage: string
}

export type ReportRunResponse = {
    id: string
    object: string
    created: number
    error: string
    livemode: boolean
    parameters: {
        columns: [string]
        connected_account: string
        currency: string
        interval_end: number
        interval_start: number
        payout: string
        reporting_category: string
        timezone: string
    }
    report_type: string
    result: {
        id: string
        object: string
        created: number
        expires_at: number
        filename: string
        links: [
            {
                object: string
                data: [
                    {
                        id: string
                        object: string
                        created: number
                        expired: boolean
                        expires_at: number
                        file: string
                        livemode: boolean
                        metadata: object
                        url: string
                    },
                ]
                has_more: boolean
                url: string
            },
        ]
        purpose: string
        size: number
        title: string
        type: string
        url: string
    }
    status: string
    succeeded_at: number
}

export type ReportTypeResponse = {
    id: string
    object: string
    data_available_end: number
    data_available_start: number
    default_columns: [string]
    name: string
    updated: number
    version: number
}

export type SQRResponse = {
    id: string
    object: string
    created: number
    data_load_time: number
    file: {
        id: string
        object: string
        created: number
        expires_at: number
        filename: string
        links: [
            {
                object: string
                data: [
                    {
                        id: string
                        object: string
                        created: number
                        expired: boolean
                        expires_at: number
                        file: string
                        livemode: boolean
                        metadata: object
                        url: string
                    },
                ]
                has_more: boolean
                url: string
            },
        ]
        purpose: string
        size: number
        title: string
        type: string
        url: string
    }
    livemode: boolean
    result_available_until: number
    sql: string
    status: string
    title: string
}

export type LocationsResponse = {
    id: string
    object: string
    address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    display_name: string
    livemode: boolean
    metadata: object
}

export type ReadersResponse = {
    id: string
    object: string
    device_sw_version: string
    device_type: string
    ip_address: string
    label: string
    livemode: boolean
    location: string
    metadata: object
    serial_number: string
    status: string
}

export type WebhookEndpointResponse = {
    id: string
    object: string
    api_version: string
    application: string
    created: number
    description: string
    enabled_events: [string]
    livemode: boolean
    metadata: object
    status: string
    url: string
    secret: string
}

export type TokensResponse = {
    id: string
    object: string
    bank_account: {
        id: string
        object: string
        account_holder_name: string
        account_holder_type: string
        bank_name: string
        country: string
        currency: string
        fingerprint: string
        last4: string
        routing_number: string
        status: string
    }
    card: {
        id: string
        object: string
        address_city: string
        address_country: string
        address_line1: string
        address_line1_check: string
        address_line2: string
        address_state: string
        address_zip: string
        address_zip_check: string
        brand: string
        country: string
        currency: string
        cvc_check: string
        dynamic_last4: string
        exp_month: number
        exp_year: number
        fingerprint: string
        funding: string
        last4: string
        metadata: object
        name: string
        tokenization_method: string
    }
    client_ip: string
    created: number
    livemode: boolean
    type: string
    used: boolean
}

export type SetupIntentsResponse = {
    id: string
    client_secret: string
    customer: string
    description: string
    last_setup_error: {
        code: string
        decline_code: string
        doc_url: string
        message: string
        param: string
        payment_method: {
            id: string
            object: string
            acss_debit: {
                bank_name: string
                fingerprint: string
                institution_number: string
                last4: string
                transit_number: string
            }
            afterpay_clearpay: {}
            alipay: {}
            au_becs_debit: {
                bsb_number: string
                fingerprint: string
                last4: string
            }
            bacs_debit: {
                fingerprint: string
                last4: string
                sort_code: string
            }
            bancontact: {}
            billing_details: {
                address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                phone: string
            }
            card: {
                brand: string
                checks: {
                    address_line1_check: string
                    address_postal_code_check: string
                    cvc_check: string
                }
                country: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                generated_from: {
                    charge: string
                    card_present: {
                        brand: string
                        cardholder_name: string
                        country: string
                        emv_auth_data: string
                        exp_month: number
                        exp_year: number
                        fingerprint: string
                        funding: string
                        generated_card: string
                        last4: string
                        network: string
                        read_method: string
                        receipt: {
                            account_type: string
                            application_cryptogram: string
                            application_preferred_name: string
                            authorization_code: string
                            authorization_response_code: string
                            cardholder_verification_method: string
                            dedicated_file_name: string
                            terminal_verification_results: string
                            transaction_status_information: string
                        }
                        type: string
                    }
                    setup_attempt: string
                }
                last4: string
                networks: {
                    available: [string]
                    preferred: string
                }
                three_d_secure_usage: {
                    supported: boolean
                }
                wallet: {
                    amex_express_checkout: {}
                    apple_pay: {}
                    dynamic_last4: string
                    google_pay: {}
                    masterpass: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                    samsung_pay: {}
                    type: string
                    visa_checkout: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                }
            }
            card_present: {}
            created: number
            customer: string
            eps: {
                bank: string
            }
            fps: {
                bank: string
            }
            giropay: {}
            grabpay: {}
            ideal: {
                bank: string
                bic: string
            }
            interac_present: {}
            livemode: boolean
            metadata: object
            oxxo: {}
            p24: {
                bank: string
            }
            sepa_debit: {
                bank_code: string
                branch_code: string
                country: string
                fingerprint: string
                generated_from: {
                    charge: string
                    setup_attempt: string
                }
                last4: string
            }
            sofort: {
                country: string
            }
            type: string
        }
        payment_method_type: string
        type: string
    }
    metadata: object
    next_action: {
        redirect_to_url: {
            return_url: string
            url: string
        }
        type: string
        use_stripe_sdk: object
    }
    payment_method: string
    payment_method_types: [string]
    status: string
    usage: string
    object: string
    application: string
    cancellation_reason: string
    created: number
    latest_attempt: string
    livemode: boolean
    mandate: string
    on_behalf_of: string
    payment_method_options: {
        acss_debit: {
            currency: string
            mandate_options: {
                custom_mandate_url: string
                interval_description: string
                payment_schedule: string
                transaction_type: string
            }
            verification_method: string
        }
        card: {
            request_three_d_secure: string
        }
        sepa_debit: {
            mandate_options: {}
        }
    }
    single_use_mandate: string
}

export type SetupAttenptsResponse = {
    id: string
    object: string
    application: string
    created: number
    customer: string
    livemode: boolean
    on_behalf_of: string
    payment_method: string
    payment_method_details: {
        au_becs_debit: {}
        bacs_debit: {}
        bancontact: {
            bank_code: string
            bank_name: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
            verified_name: string
        }
        card: {
            three_d_secure: {
                authentication_flow: string
                result: string
                result_reason: string
                version: string
            }
        }
        card_present: {
            generated_card: string
        }
        ideal: {
            bank: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            verified_name: string
        }
        sepa_debit: {}
        sofort: {
            bank_code: string
            bank_name: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
            verified_name: string
        }
        type: string
    }
    setup_error: {
        code: string
        decline_code: string
        doc_url: string
        message: string
        param: string
        payment_method: {
            id: string
            object: string
            acss_debit: {
                bank_name: string
                fingerprint: string
                institution_number: string
                last4: string
                transit_number: string
            }
            afterpay_clearpay: {}
            alipay: {}
            au_becs_debit: {
                bsb_number: string
                fingerprint: string
                last4: string
            }
            bacs_debit: {
                fingerprint: string
                last4: string
                sort_code: string
            }
            bancontact: {}
            billing_details: {
                address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                phone: string
            }
            card: {
                brand: string
                checks: {
                    address_line1_check: string
                    address_postal_code_check: string
                    cvc_check: string
                }
                country: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                generated_from: {
                    charge: string
                    card_present: {
                        brand: string
                        cardholder_name: string
                        country: string
                        emv_auth_data: string
                        exp_month: number
                        exp_year: number
                        fingerprint: string
                        funding: string
                        generated_card: string
                        last4: string
                        network: string
                        read_method: string
                        receipt: {
                            account_type: string
                            application_cryptogram: string
                            application_preferred_name: string
                            authorization_code: string
                            authorization_response_code: string
                            cardholder_verification_method: string
                            dedicated_file_name: string
                            terminal_verification_results: string
                            transaction_status_information: string
                        }
                        type: string
                    }
                    setup_attempt: string
                }
                last4: string
                networks: {
                    available: [string]
                    preferred: string
                }
                three_d_secure_usage: {
                    supported: boolean
                }
                wallet: {
                    amex_express_checkout: {}
                    apple_pay: {}
                    dynamic_last4: string
                    google_pay: {}
                    masterpass: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                    samsung_pay: {}
                    type: string
                    visa_checkout: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                }
            }
            card_present: {}
            created: number
            customer: string
            eps: {
                bank: string
            }
            fpx: {
                bank: string
            }
            giropay: {}
            grabpay: {}
            ideal: {
                bank: string
                bic: string
            }
            interac_present: {}
            livemode: boolean
            metadata: object
            oxxo: {}
            p24: {
                bank: string
            }
            sepa_debit: {
                bank_code: string
                branch_code: string
                country: string
                fingerprint: string
                generated_from: {
                    charge: string
                    setup_attempt: string
                }
                last4: string
            }
            sofort: {
                country: string
            }
            type: string
        }
        paymnet_method_type: string
        type: string
    }
    setup_intent: string
    status: string
    usage: string
}

export type RefundsResponse = {
    id: string
    amount: number
    charge: string
    currency: string
    description: string
    metadata: object
    payment_intent: string
    reason: string
    status: string
    object: string
    balance_transaction: string
    created: number
    failure_balance_transaction: string
    failure_reason: string
    receipt_number: string
    source_transfer_reversal: string
    transfer_reversal: string
}

export type ProductsResponse = {
    id: string
    active: boolean
    description: string
    metadata: object
    name: string
    object: string
    created: number
    images: [string]
    livemode: boolean
    package_dimensions: {
        height: number
        length: number
        weight: number
        width: number
    }
    shippable: boolean
    statement_descriptor: string
    unit_label: string
    updated: number
    url: string
}

export type PricesResponse = {
    id: string
    active: boolean
    currency: string
    metadata: object
    nickname: string
    product: string
    recurring: {
        aggregate_usage: string
        interval: string
        interval_count: string
        usage_type: string
    }
    type: string
    unit_amount: number
    object: string
    billing_scheme: string
    created: number
    livemode: boolean
    lookup_key: string
    tiers: {
        flat_amount: number
        flat_amount_decimal: string
        unit_amount: number
        unit_amount_decimal: string
        up_to: number
    }
    tiers_mode: string
    transform_quantity: {
        divide_by: number
        round: string
    }
    unit_amount_decimal: string
}

export type PayoutsResponse = {
    id: string
    amount: number
    arrival_date: number
    currency: string
    description: string
    metadata: object
    statement_descriptor: string
    status: string
    object: string
    automatic: boolean
    balance_transaction: string
    created: number
    destination: string
    failure_balance_transaction: string
    failure_code: string
    failure_message: string
    livemode: boolean
    method: string
    original_payout: string
    reversed_by: string
    source_type: string
    type: string
}

export type PaymentIntentsResponse = {
    id: string
    amount: number
    charges: {
        object: string
        data: [ChargesResponse]
        has_more: boolean
        url: string
    }
    client_secret: string
    currency: string
    customer: string
    description: string
    last_payment_error: {
        charge: string
        code: string
        decline_code: string
        doc_url: string
        message: string
        param: string
        payment_method: {
            id: string
            object: string
            acss_debit: {
                bank_name: string
                fingerprint: string
                institution_number: string
                last4: string
                transit_number: string
            }
            afterpay_clearpay: {}
            alipay: {}
            au_becs_debit: {
                number: string
                fingerprint: string
                last4: string
            }
            bacs_debit: {
                fingerprint: string
                last4: string
                sort_code: string
            }
            bancontact: {}
            billing_details: {
                address: {
                    city: string
                    country: string
                    line1: string
                    line2: string
                    postal_code: string
                    state: string
                }
                email: string
                name: string
                phone: string
            }
            card: {
                brand: string
                checks: {
                    address_line1_check: string
                    address_postal_code_check: string
                    cvc_check: string
                }
                country: string
                exp_month: number
                exp_year: number
                fingerprint: string
                funding: string
                generated_from: {
                    charge: string
                    card_present: {
                        brand: string
                        cardholder_name: string
                        country: string
                        emv_auth_data: string
                        exp_month: number
                        exp_year: number
                        fingerprint: string
                        funding: string
                        generated_card: string
                        last4: string
                        network: string
                        read_method: string
                        receipt: {
                            account_type: string
                            application_cryptogram: string
                            application_preferred_name: string
                            authorization_code: string
                            authorization_response_code: string
                            cardholder_verification_method: string
                            dedicated_file_name: string
                            terminal_verification_results: string
                            transaction_status_information: string
                        }
                        type: string
                    }
                    setup_attempt: string
                }
                last4: string
                networks: {
                    available: [string]
                    preferred: string
                }
                three_d_secure_usage: {
                    supported: boolean
                }
                wallet: {
                    amex_express_checkout: {}
                    apple_pay: {}
                    dynamic_last4: string
                    google_pay: {}
                    masterpass: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                    samsung_pay: {}
                    type: string
                    visa_checkout: {
                        billing_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                        email: string
                        name: string
                        shipping_address: {
                            city: string
                            country: string
                            line1: string
                            line2: string
                            postal_code: string
                            state: string
                        }
                    }
                }
            }
            card_present: {}
            created: number
            customer: string
            eps: {
                bank: string
            }
            fps: {
                bank: string
            }
            giropay: {}
            grabpay: {}
            ideal: {
                bank: string
                bic: string
            }
            interac_present: {}
            livemode: boolean
            metadata: object
            oxxo: {}
            p24: {
                bank: string
            }
            sepa_debit: {
                bank_code: string
                branch_code: string
                country: string
                fingerprint: string
                generated_from: {
                    charge: string
                    setup_attempt: string
                }
                last4: string
            }
            sofort: {
                country: string
            }
            type: string
        }
        payment_method_type: string
        type: string
    }
    metadata: object
    next_action: {
        alipay_handle_redirect: {
            native_data: string
            native_url: string
            return_url: string
            url: string
        }
        oxxo_display_details: {
            expires_after: number
            hosted_voucher_url: string
            number: string
        }
        redirect_to_url: {
            return_url: string
            url: string
        }
        type: string
        use_stripe_sdk: object
    }
    payment_method: string
    payment_method_types: [string]
    receipt_email: string
    setup_future_usage: string
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    statement_descriptor: string
    statement_descriptor_suffix: string
    status: string
    object: string
    amount_capturable: number
    amount_received: number
    application: string
    application_fee_amount: number
    canceled_at: number
    cancellation_reason: string
    capture_method: string
    confirmation_method: string
    created: number
    invoice: string
    livemode: boolean
    on_behalf_of: string
    payment_method_options: {
        acss_debit: {
            mandate_options: {
                custom_mandate_url: string
                interval_description: string
                payment_schedule: string
                transaction_type: string
            }
            verification_method: string
        }
        alipay: {}
        bancontact: {
            preferred_language: string
        }
        card: {
            installments: {
                available_plans: {
                    count: number
                    interval: string
                    type: string
                }
                enabled: boolean
                plan: {
                    count: number
                    interval: string
                    type: string
                }
                network: string
                request_three_d_secure: string
            }
        }
        card_present: {}
        oxxo: {
            expires_after_days: number
        }
        p24: {}
        sepa_debit: {
            mandate_options: {}
        }
        sofort: {
            preferred_language: string
        }
    }
    review: string
    transfer_data: {
        amount: number
        destination: string
    }
    transfer_group: string
}

export type MandatesReponse = {
    id: string
    customer_acceptance: {
        accepted_at: number
        offline: {}
        online: {
            ip_address: string
            user_agent: string
        }
        type: string
    }
    payment_method: string
    payment_method_details: {
        acss_debit: {
            interval_description: string
            payment_schedule: string
            transaction_type: string
        }
        au_becs_debit: {
            url: string
        }
        bacs_debit: {
            network_status: string
            reference: string
            url: string
        }
        card: {}
        sepa_debit: {
            reference: string
            url: string
        }
        type: string
    }
    status: string
    type: string
    object: string
    livemode: boolean
    multi_use: {}
    single_use: {
        amount: number
        currency: string
    }
}

export type FilesResponse = {
    id: string
    purpose: string
    type: string
    object: string
    created: number
    expires_at: number
    filename: string
    links: {
        object: string
        has_more: boolean
        url: string
        data: [
            {
                id: string
                object: string
                created: number
                expired: boolean
                expires_at: number
                file: string
                livemode: boolean
                metadata: object
                url: string
            },
        ]
    }
    size: number
    title: string | undefined
    url: string
}

export type FileLinksResponse = {
    id: string
    expires_at: number
    file: string
    metadata: object
    url: string
    object: string
    created: number
    expired: boolean
    livemode: boolean
}

export type EventRetrieveResponse = {
    id: string
    api_version: string
    data: {
        object: object
        previous_attributes: object
    }
    request: {
        id: string
        idempotency_key: string
    }
    type: string
    object: string
    account: string
    created: number
    livemode: boolean
    pending_webhooks: number
}

/*type DisputesResponse = { check this tomorrow
        id: string
        object: string
        amount: number
        balance_transactions: [object]
        charge: string
        created: number
        currency: string
        evidence: object
        evidende_details: {
            due_by: number
            has_evidence: boolean
            post_due: boolean
            submission_count: number
        }
        is_charge_refundable: boolean
        livemode: boolean
        metadata: object
        payment_intent: string
        reason: string
        status: string
    }*/

export type CustomersResponse = {
    id: string
    object: string
    address: {
        city: string
        country: string
        line1: string
        line2: string
        postal_code: string
        state: string
    }
    balance: number
    created: number
    currency: string
    default_source: string
    delinquent: boolean
    description: string
    discount: object
    email: string
    invoice_prefix: string
    invoice_settings: {
        custom_fields: [
            {
                name: string
                value: string
            },
        ]
        default_payment_method: string
        footer: string
    }
    livemode: boolean
    metadata: object
    name: string
    next_invoice_sequence: number
    phone: string
    preferred_locales: []
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        name: string
        phone: string
    }
    tax_exempt: string
    tax_ids: {
        object: string
        has_more: boolean
        url: string
        data: [
            {
                id: string
                object: string
                country: string
                created: number
                customer: string
                livemode: boolean
                type: string
                value: string
                verification: {
                    status: string
                    verified_address: string
                    verified_name: string
                }
            },
        ]
    }
}

export type CardSourceResponse = {
    id: string
    object: string
    address_city: string
    address_country: string
    address_line1: string
    address_line1_check: string
    address_line2: string
    address_state: string
    address_zip: string
    address_zip_check: string
    brand: string
    country: string
    customer: string
    cvc_check: string
    dynamic_last4: string
    exp_month: number
    exp_year: number
    fingerprint: string
    funding: string
    last4: string
    metadata: object
    name: string
    tokenization_method: string
    account: string
    available_payout_methods: [unknown]
    currency: string
    recipient: string
}

export type BankAccountResponse = {
    id: string
    object: string
    account_holder_name: string
    account_holder_type: string
    bank_name: string
    country: string
    currency: string
    customer: string
    fingerprint: string
    last4: string
    metadata: object
    routing_number: string
    status: string
    account: string
    available_payout_methods: [unknown]
}

export type TaxIDsResponse = {
    id: string
    object: string
    country: string
    created: number
    customer: string
    livemode: boolean
    type: string
    value: string
    verification: {
        status: string
        verified_address: string
        verified_name: string
    }
}

export type CustomerBalanceTransactionResponse = {
    id: string
    amount: number
    currency: string
    customer: string | CustomersResponse
    description: string
    ending_balance: number
    metadata: object
    type: string
    object: string
    created: number
    credit_note: string | CreditNotesLines
    invoice: string | InvoicesResponse
    livemode: boolean
}

export type ChargesResponse = {
    id: string
    amount: number
    balance_transaction: string | BalanceTransactionsResponse
    billing_details: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        email: string
        name: string
        phone: string
    }
    currency: string
    customer: string | CustomersResponse
    description: string
    disputed: boolean
    invoice: string | InvoicesResponse
    metadata: object
    payment_intent: string | PaymentIntentsResponse
    payment_method_details: {
        ach_credit_transfer: {
            account_number: string
            bank_name: string
            routing_number: string
            swift_code: string
        }
        ach_debit: {
            account_holder_type: string
            bank_name: string
            country: string
            fingerprint: string
            last4: string
            routing_number: string
        }
        acss_debit: {
            bank_name: string
            fingerprint: string
            institution_number: string
            last4: string
            mandate: string
            transit_number: string
        }
        afterpay_clearpay: {}
        alipay: {
            fingerprint: string
            transaction_id: string
        }
        au_becs_debit: {
            bsb_number: string
            fingerprint: string
            last4: string
            mandate: string
        }
        bacs_debit: {
            fingerprint: string
            last4: string
            mandate: string
            sort_code: string
        }
        bancontact: {
            bank_code: string
            bank_name: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
            verified_name: string
        }
        card: {
            brand: string
            checks: {
                address_line1_check: string
                address_postal_code_check: string
                cvc_check: string
            }
            country: string
            exp_month: number
            exp_year: number
            fingerprint: string
            funding: string
            installments: {
                plan: {
                    count: number
                    interval: string
                    type: string
                }
            }
            last4: string
            network: string
            three_d_secure: {
                authentication_flow: string
                result: string
                result_reason: string
                version: string
            }
            wallet: {
                amex_express_checkout: {}
                apple_pay: {}
                dynamic_last4: string
                google_pay: {}
                masterpass: {
                    billing_address: {
                        city: string
                        country: string
                        line1: string
                        line2: string
                        postal_code: string
                        state: string
                    }
                    email: string
                    name: string
                    shipping_address: {
                        city: string
                        country: string
                        line1: string
                        line2: string
                        postal_code: string
                        state: string
                    }
                }
                samsung_pay: {}
                type: string
                visa_checkout: {
                    billing_address: {
                        city: string
                        country: string
                        line1: string
                        line2: string
                        postal_code: string
                        state: string
                    }
                    email: string
                    name: string
                    shipping_address: {
                        city: string
                        country: string
                        line1: string
                        line2: string
                        postal_code: string
                        state: string
                    }
                }
            }
        }
        card_present: {
            brand: string
            cardholder_name: string
            country: string
            emv_auth_data: string
            exp_month: number
            exp_year: number
            fingerprint: string
            funding: string
            generated_card: string
            last4: string
            network: string
            preferred_locales: [string]
            read_method: string
            receipt: {
                account_type: string
                application_cryptogram: string
                application_preferred_name: string
                authorization_code: string
                authorization_response_code: string
                cardholder_verification_method: string
                dedicated_file_name: string
                terminal_verification_results: string
                transaction_status_information: string
            }
        }
        eps: {
            bank: string
            verified_name: string
        }
        fpx: {
            bank: string
            transaction_id: string
        }
        giropay: {
            bank_code: string
            bank_name: string
            bic: string
            verified_name: string
        }
        grabpay: {
            transaction_id: string
        }
        ideal: {
            bank: string
            bic: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            verified_name: string
        }
        interac_present: {
            brand: string
            cardholder_name: string
            country: string
            emv_auth_data: string
            exp_month: number
            exp_year: number
            fingerprint: string
            funding: string
            generated_card: string
            last4: string
            network: string
            preferred_locales: [string]
            read_method: string
            receipt: {
                account_type: string
                application_cryptogram: string
                application_preferred_name: string
                authorization_code: string
                authorization_response_code: string
                cardholder_verification_method: string
                dedicated_file_name: string
                terminal_verification_results: string
                transaction_status_information: string
            }
        }
        klarna: {}
        multibanco: {
            entity: string
            reference: string
        }
        oxxo: {
            number: string
        }
        p24: {
            bank: string
            reference: string
            verified_name: string
        }
        sepa_debit: {
            bank_code: string
            branch_code: string
            country: string
            fingerprint: string
            last4: string
            mandate: string
        }
        sofort: {
            bank_code: string
            bank_name: string
            bic: string
            country: string
            generated_sepa_debit: string
            generated_sepa_debit_mandate: string
            iban_last4: string
            preferred_language: string
        }
        stripe_account: {}
        type: string
        wechat: {}
    }
    receipt_email: string
    refunded: boolean
    shipping: {
        address: {
            city: string
            country: string
            line1: string
            line2: string
            postal_code: string
            state: string
        }
        carrier: string
        name: string
        phone: string
        tracking_number: string
    }
    statement_descriptor: string
    statement_descriptor_suffix: string
    status: string
    object: string
    amount_captured: number
    amount_refunded: number
    application: string
    application_fee: string
    application_fee_amount: number
    calculated_statement_descriptor: string
    captured: boolean
    created: number
    failure_code: string
    failure_message: string
    fraud_details: {
        stripe_report: string
        user_report: string
    }
    livemode: boolean
    on_behalf_of: string
    order: string | OrdersResponse
    outcome: {
        network_status: string
        reason: string
        risk_level: string
        risk_score: number
        rule: string
        seller_message: string
        type: string
    }
    paid: boolean
    payment_method: string
    receipt_number: string
    receipt_url: string
    refunds: {
        object: string
        data: [RefundsResponse]
        has_more: boolean
        url: string
    }
    review: string
    source_transfer: string
    transfer_data: {
        amount: number
        destination: string
    }
    transfer_group: string
    source: string
}

export type BalanceResponse = {
    available: [
        {
            amount: number
            currency: string
            source_types: {
                bank_account: number
                card: number
                fpx: number
            }
        },
    ]
    pending: [
        {
            amount: number
            currency: string
            source_types: {
                bank_account: number
                card: number
                fpx: number
            }
        },
    ]
    object: string
    connect_reserved: [
        {
            amount: number
            currency: string
            source_types: {
                bank_account: number
                card: number
                fpx: number
            }
        },
    ]
    instant_available: [
        {
            amount: number
            currency: string
            source_types: {
                bank_account: number
                card: number
                fpx: number
            }
        },
    ]
    issuing: {
        available: [
            {
                amount: number
                currency: string
                source_types: {
                    bank_account: number
                    card: number
                    fpx: number
                }
            },
        ]
    }
    livemode: boolean
}
