import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get company benefit summary by company benefit id.
 *
 * @remarks
 * Returns summary benefit data for the requested company benefit id.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export declare function companyBenefitsGetSummary(client: GustoEmbeddedCore, request: operations.GetV1BenefitsCompanyBenefitIdSummaryRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1BenefitsCompanyBenefitIdSummaryResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyBenefitsGetSummary.d.ts.map