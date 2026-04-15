import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all employee forms
 *
 * @remarks
 * Get a list of all employee's forms
 *
 * scope: `employee_forms:read`
 */
export declare function employeeFormsList(client: GustoEmbeddedCore, request: operations.GetV1EmployeeFormsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeeFormsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeFormsList.d.ts.map