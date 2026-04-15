import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest, PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse } from "../models/operations/putv1companybenefitscompanybenefitidcontributionexclusions.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update contribution exclusions for a company benefit
 *
 * @remarks
 * Updates contribution exclusions for a given company benefit.
 *
 * Currently this endpoint only works for 401-k and Roth 401-k benefit types.
 *
 * scope: `company_benefits:write`
 */
export declare function companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions(client: GustoEmbeddedCore, request: PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest, options?: RequestOptions): APIPromise<Result<PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyBenefitsPutV1CompanyBenefitsCompanyBenefitIdContributionExclusions.d.ts.map