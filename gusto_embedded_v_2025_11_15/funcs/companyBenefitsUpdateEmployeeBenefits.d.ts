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
 * Bulk update employee benefits for a company benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:write`
 */
export declare function companyBenefitsUpdateEmployeeBenefits(client: GustoEmbeddedCore, request: operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyBenefitsUpdateEmployeeBenefits.d.ts.map