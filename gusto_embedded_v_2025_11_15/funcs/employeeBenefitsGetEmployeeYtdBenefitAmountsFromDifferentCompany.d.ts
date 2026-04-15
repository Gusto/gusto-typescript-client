import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get year-to-date benefit amounts from a different company
 *
 * @remarks
 * Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
 * Returns benefit amounts for the requested tax year (defaults to current year if not specified).
 *
 * This endpoint only supports retrieving outside contributions for 401(k) benefits.
 *
 * scope: `employee_benefits:read`
 */
export declare function employeeBenefitsGetEmployeeYtdBenefitAmountsFromDifferentCompany(client: GustoEmbeddedCore, request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): Promise<Result<Array<components.YtdBenefitAmountsFromDifferentCompany>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeBenefitsGetEmployeeYtdBenefitAmountsFromDifferentCompany.d.ts.map