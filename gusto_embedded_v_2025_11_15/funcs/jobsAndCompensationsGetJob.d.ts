import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * scope: `jobs:read`
 */
export declare function jobsAndCompensationsGetJob(client: GustoEmbeddedCore, request: operations.GetV1JobsJobIdRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1JobsJobIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobsAndCompensationsGetJob.d.ts.map