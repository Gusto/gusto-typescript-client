import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Delete an individual job
 *
 * @remarks
 * Deletes a specific job that an employee holds.
 *
 * scope: `jobs:write`
 */
export declare function jobsAndCompensationsDeleteJob(client: GustoEmbeddedCore, request: operations.DeleteV1JobsJobIdRequest, options?: RequestOptions): Promise<Result<void, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobsAndCompensationsDeleteJob.d.ts.map