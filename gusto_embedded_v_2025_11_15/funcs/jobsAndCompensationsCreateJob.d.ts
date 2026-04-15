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
 * Create a job
 *
 * @remarks
 * Create a job.
 *
 * scope: `jobs:write`
 */
export declare function jobsAndCompensationsCreateJob(client: GustoEmbeddedCore, request: operations.PostV1JobsJobIdRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1JobsJobIdResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobsAndCompensationsCreateJob.d.ts.map