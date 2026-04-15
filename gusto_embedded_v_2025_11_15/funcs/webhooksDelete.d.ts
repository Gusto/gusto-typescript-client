import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Delete a webhook subscription
 *
 * @remarks
 * Deletes the Webhook Subscription associated with the provided UUID.
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
 *
 * scope: `webhook_subscriptions:write`
 */
export declare function webhooksDelete(client: GustoEmbeddedCore, security: operations.DeleteV1WebhookSubscriptionUuidSecurity, request: operations.DeleteV1WebhookSubscriptionUuidRequest, options?: RequestOptions): Promise<Result<void, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=webhooksDelete.d.ts.map