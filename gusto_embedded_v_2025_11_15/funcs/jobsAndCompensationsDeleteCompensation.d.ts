import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
 *
 * scope: `jobs:write`
 */
export declare function jobsAndCompensationsDeleteCompensation(client: GustoEmbeddedCore, request: operations.DeleteV1CompensationsCompensationIdRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1CompensationsCompensationIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobsAndCompensationsDeleteCompensation.d.ts.map