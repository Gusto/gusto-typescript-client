import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the contractor's onboarding status
 *
 * @remarks
 * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `contractors:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ### Contractor self-onboarding
 *
 * | onboarding_status | Description |
 * | --- | ----------- |
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
 * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
 * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
 * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
 * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
 * | `add_address` | Add contractor address. |
 * | `compensation_details` | Add contractor compensation. |
 * | `payment_details` | Set up contractor's direct deposit or set to check. |
 * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
 * | `file_new_hire_report` | Contractor new hire report is generated. |
 */
export declare function contractorsGetOnboardingStatus(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorsContractorUuidOnboardingStatusResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsGetOnboardingStatus.d.ts.map