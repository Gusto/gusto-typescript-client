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
 * Delete a company benefit
 *
 * @remarks
 * The following must be true in order to delete a company benefit
 *   - There are no employee benefits associated with the company benefit
 *   - There are no payroll items associated with the company benefit
 *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
 *
 * scope: `company_benefits:write`
 */
export declare function companyBenefitsDelete(client: GustoEmbeddedCore, request: operations.DeleteV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse, errors.DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyBenefitsDelete.d.ts.map