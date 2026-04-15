import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the company's onboarding status
 *
 * @remarks
 * Get company's onboarding status.
 * The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `company_onboarding_status:read`
 */
export declare function companiesGetOnboardingStatus(client: GustoEmbeddedCore, request: operations.GetV1CompanyOnboardingStatusRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyOnboardingStatusResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesGetOnboardingStatus.d.ts.map