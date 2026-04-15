import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Request the webhook subscription verification_token
 *
 * @remarks
 * Request that the webhook subscription `verification_token` be POSTed to the Subscription URL.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:read`
 */
export declare function webhooksRequestVerificationToken(client: GustoEmbeddedCore, security: operations.GetV1WebhookSubscriptionVerificationTokenUuidSecurity, request: operations.GetV1WebhookSubscriptionVerificationTokenUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1WebhookSubscriptionVerificationTokenUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=webhooksRequestVerificationToken.d.ts.map