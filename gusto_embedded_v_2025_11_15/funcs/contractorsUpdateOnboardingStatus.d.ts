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
 * Change the contractor's onboarding status
 *
 * @remarks
 * Updates a contractor's onboarding status.
 *
 * scope: `contractors:write`
 *
 * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.
 *
 * | Action | current onboarding_status | new onboarding_status |
 * |:------------------|:------------:|----------:|
 * | Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
 * | Invite a contractor to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
 * | Cancel a contractor's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
 * | Review a contractor's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
 * | Finish a contractor's onboarding | `admin_onboarding_review` or `self_onboarding_review` | `onboarding_completed` |
 */
export declare function contractorsUpdateOnboardingStatus(client: GustoEmbeddedCore, request: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1ContractorsContractorUuidOnboardingStatusResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsUpdateOnboardingStatus.d.ts.map