import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { PutAddPeopleToDepartmentRequest, PutAddPeopleToDepartmentResponse } from "../models/operations/putaddpeopletodepartment.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Add people to a department
 *
 * @remarks
 * Add employees and contractors to a department
 *
 * scope: `departments:write`
 */
export declare function departmentsAddPeople(client: GustoEmbeddedCore, request: PutAddPeopleToDepartmentRequest, options?: RequestOptions): APIPromise<Result<PutAddPeopleToDepartmentResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=departmentsAddPeople.d.ts.map