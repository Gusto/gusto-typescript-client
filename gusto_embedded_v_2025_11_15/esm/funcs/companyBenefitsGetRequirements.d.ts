import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1BenefitsBenefitsIdRequirementsRequest, GetV1BenefitsBenefitsIdRequirementsResponse } from "../models/operations/getv1benefitsbenefitsidrequirements.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get benefit fields requirements by ID
 *
 * @remarks
 * Returns field requirements for the requested benefit type.
 *
 * scope: `benefits:read`
 */
export declare function companyBenefitsGetRequirements(client: GustoEmbeddedCore, request: GetV1BenefitsBenefitsIdRequirementsRequest, options?: RequestOptions): APIPromise<Result<GetV1BenefitsBenefitsIdRequirementsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyBenefitsGetRequirements.d.ts.map