import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1JobsJobIdRequest, PostV1JobsJobIdResponse } from "../models/operations/postv1jobsjobid.js";
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
export declare function jobsAndCompensationsCreateJob(client: GustoEmbeddedCore, request: PostV1JobsJobIdRequest, options?: RequestOptions): APIPromise<Result<PostV1JobsJobIdResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=jobsAndCompensationsCreateJob.d.ts.map