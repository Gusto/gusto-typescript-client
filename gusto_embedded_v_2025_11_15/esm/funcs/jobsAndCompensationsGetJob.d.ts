import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1JobsJobIdRequest, GetV1JobsJobIdResponse } from "../models/operations/getv1jobsjobid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. These fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are returned only when the `compensations:read` scope is included.
 *
 * scope: `jobs:read`
 */
export declare function jobsAndCompensationsGetJob(client: GustoEmbeddedCore, request: GetV1JobsJobIdRequest, options?: RequestOptions): APIPromise<Result<GetV1JobsJobIdResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=jobsAndCompensationsGetJob.d.ts.map