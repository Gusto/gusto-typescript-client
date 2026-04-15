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
 * Create year-to-date benefit amounts from a different company
 *
 * @remarks
 * Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.
 *
 * This endpoint only supports passing outside contributions for 401(k) benefits.
 *
 * scope: `employee_benefits:write`
 */
export declare function employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(client: GustoEmbeddedCore, request: operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): APIPromise<Result<operations.PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany.d.ts.map