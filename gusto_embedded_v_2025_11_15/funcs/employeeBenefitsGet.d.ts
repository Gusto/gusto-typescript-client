import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all benefits for an employee
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Returns an array of all employee benefits for this employee
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function employeeBenefitsGet(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeBenefitsGet.d.ts.map