import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function departmentsAddPeople(client: GustoEmbeddedCore, request: operations.PutAddPeopleToDepartmentRequest, options?: RequestOptions): APIPromise<Result<operations.PutAddPeopleToDepartmentResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=departmentsAddPeople.d.ts.map