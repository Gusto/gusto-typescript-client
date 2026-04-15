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
 * Initiate a redebit for a recovery case
 *
 * @remarks
 * After resolving the underlying bank error, initiate a redebit for an open recovery case. This submission is asynchronous and a successful request responds with a 202 HTTP status.
 *
 * It may take up to four business days for the ACH debit to process; in the meantime, the status of the recovery case will be in the `initiated_redebit` state. When funds are successfully redebited, the recovery case is transitioned to the `recovered` state.
 *
 * If the company has exceeded maximum redebit attempts, or if the recovery case is not in a redebitable state, the response will be 422 Unprocessable Entity.
 *
 * scope: `recovery_cases:write`
 */
export declare function recoveryCasesRedebit(client: GustoEmbeddedCore, request: operations.RedebitRecoveryCaseRequest, options?: RequestOptions): APIPromise<Result<operations.RedebitRecoveryCaseResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=recoveryCasesRedebit.d.ts.map