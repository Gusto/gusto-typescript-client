import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create an employee work address
 *
 * @remarks
 * The work address of an employee describes when an employee began working at an associated company location.
 *
 * scope: `employees:manage`
 */
export declare function employeeAddressesCreateWorkAddress(client: GustoEmbeddedCore, request: operations.PostV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1EmployeesEmployeeIdWorkAddressesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeAddressesCreateWorkAddress.d.ts.map