import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's custom fields
 *
 * @remarks
 * Returns a list of the employee's custom fields.
 *
 * scope: `employees:read`
 */
export declare function employeesGetCustomFields(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdCustomFieldsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesGetCustomFields.d.ts.map