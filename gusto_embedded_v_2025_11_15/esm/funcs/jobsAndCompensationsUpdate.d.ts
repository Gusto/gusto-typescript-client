import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1JobsJobIdRequest, PutV1JobsJobIdResponse } from "../models/operations/putv1jobsjobid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a job
 *
 * @remarks
 * Update a job.
 *
 * scope: `jobs:write`
 */
export declare function jobsAndCompensationsUpdate(client: GustoEmbeddedCore, request: PutV1JobsJobIdRequest, options?: RequestOptions): APIPromise<Result<PutV1JobsJobIdResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=jobsAndCompensationsUpdate.d.ts.map