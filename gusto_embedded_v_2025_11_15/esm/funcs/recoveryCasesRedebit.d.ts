import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { RedebitRecoveryCaseRequest, RedebitRecoveryCaseResponse } from "../models/operations/redebitrecoverycase.js";
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
export declare function recoveryCasesRedebit(client: GustoEmbeddedCore, request: RedebitRecoveryCaseRequest, options?: RequestOptions): APIPromise<Result<RedebitRecoveryCaseResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=recoveryCasesRedebit.d.ts.map