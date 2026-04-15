import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get jobs for an employee
 *
 * @remarks
 * Get all of the jobs that an employee holds.
 *
 * scope: `jobs:read`
 */
export declare function jobsAndCompensationsGetJobs(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdJobsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobsAndCompensationsGetJobs.d.ts.map