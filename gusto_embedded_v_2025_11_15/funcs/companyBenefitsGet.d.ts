import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a company benefit
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
 *
 * scope: `company_benefits:read`
 */
export declare function companyBenefitsGet(client: GustoEmbeddedCore, request: operations.GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyBenefitsCompanyBenefitIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyBenefitsGet.d.ts.map