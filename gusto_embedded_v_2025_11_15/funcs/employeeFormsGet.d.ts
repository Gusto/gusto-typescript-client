import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function employeeFormsGet(client: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeeFormResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeFormsGet.d.ts.map