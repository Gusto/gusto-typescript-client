import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a notification's details
 *
 * @remarks
 * Upon receiving a notification webhook event, use this endpoint to fetch the notification's details. The notification details include basic suggested content that can help you build notifications in your platform.
 *
 * Note: partners are responsible for the delivery and any custom state management of notifications in their application. Refer to our [partner notification guide](https://docs.gusto.com/embedded-payroll/docs/partner-notifications) for more details.
 *
 * If the notification UUID is not found, the response will be 404 Not Found. If the notification's supporting data is no longer valid, the response will be 422 Unprocessable Entity.
 *
 * scope: `notifications:read`
 */
export declare function notificationsGetDetails(client: GustoEmbeddedCore, request: operations.GetNotificationsNotificationUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetNotificationsNotificationUuidResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=notificationsGetDetails.d.ts.map