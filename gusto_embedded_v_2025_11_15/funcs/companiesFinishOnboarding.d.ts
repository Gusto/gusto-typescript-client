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
 * Finish company onboarding
 *
 * @remarks
 * Finalize a given company's onboarding process.
 *
 * ### Approve a company in demo
 * After a company is finished onboarding, Gusto requires an additional step to review and approve that company. The company onboarding status is `"onboarding_completed": false`, until the API call is made to finish company onboarding.
 * In production environments, this step is required for risk-analysis purposes.
 *
 * We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.
 *
 * ```shell
 * PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'
 *
 * # Response: Company object, with company_status: 'Approved'
 * ```
 *
 * scope: `companies:write`
 */
export declare function companiesFinishOnboarding(client: GustoEmbeddedCore, request: operations.GetV1CompanyFinishOnboardingRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyFinishOnboardingResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesFinishOnboarding.d.ts.map