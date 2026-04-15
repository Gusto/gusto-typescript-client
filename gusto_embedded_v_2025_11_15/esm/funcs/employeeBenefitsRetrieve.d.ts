import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1EmployeeBenefitsEmployeeBenefitIdRequest, GetV1EmployeeBenefitsEmployeeBenefitIdResponse } from "../models/operations/getv1employeebenefitsemployeebenefitid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function employeeBenefitsRetrieve(client: GustoEmbeddedCore, request: GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): APIPromise<Result<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeBenefitsRetrieve.d.ts.map