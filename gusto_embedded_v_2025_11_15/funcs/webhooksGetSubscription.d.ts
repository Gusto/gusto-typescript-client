import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a webhook subscription
 *
 * @remarks
 * Returns the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function webhooksGetSubscription(client: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionUuidSecurity, request: operations.GetV1WebhookSubscriptionUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1WebhookSubscriptionUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=webhooksGetSubscription.d.ts.map