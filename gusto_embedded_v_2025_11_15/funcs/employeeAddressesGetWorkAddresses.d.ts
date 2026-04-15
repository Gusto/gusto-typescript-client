import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function employeeAddressesGetWorkAddresses(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdWorkAddressesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeAddressesGetWorkAddresses.d.ts.map