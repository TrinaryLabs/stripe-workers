export declare class StripeError extends Error {
    type: string;
    raw: unknown;
    rawType?: string;
    code?: number;
    doc_url?: string;
    param?: string;
    detail?: string;
    headers?: [string, unknown];
    requestId?: string;
    statusCode?: number;
    message: string;
    charge?: unknown;
    decline_code?: number;
    payment_intent?: string;
    payment_method?: unknown;
    payment_method_type?: unknown;
    setup_intent?: unknown;
    source?: unknown;
    constructor(raw: {
        type?: string;
        code?: number;
        doc_url?: string;
        param?: string;
        detail?: string;
        headers?: [string, unknown];
        requestId?: string;
        statusCode?: number;
        message: string;
        charge?: unknown;
        decline_code?: number;
        payment_intent?: string;
        payment_method?: unknown;
        payment_method_type?: unknown;
        setup_intent?: unknown;
        source?: unknown;
    });
    /**
     * Helper factory which takes raw stripe errors and outputs wrapping instances
     */
    static generate(rawStripeError: {
        type?: string;
        code?: number;
        doc_url?: string;
        param?: string;
        detail?: string;
        headers?: [string, unknown];
        requestId?: string;
        statusCode?: number;
        message: string;
        charge?: unknown;
        decline_code?: number;
        payment_intent?: string;
        payment_method?: unknown;
        payment_method_type?: unknown;
        setup_intent?: unknown;
        source?: unknown;
    }): Error;
}
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export declare class StripeCardError extends StripeError {
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export declare class StripeInvalidRequestError extends StripeError {
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export declare class StripeAPIError extends StripeError {
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export declare class StripeAuthenticationError extends StripeError {
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export declare class StripePermissionError extends StripeError {
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export declare class StripeRateLimitError extends StripeError {
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export declare class StripeConnectionError extends StripeError {
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export declare class StripeSignatureVerificationError extends StripeError {
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export declare class StripeIdempotencyError extends StripeError {
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export declare class StripeInvalidGrantError extends StripeError {
}
//# sourceMappingURL=error.d.ts.map