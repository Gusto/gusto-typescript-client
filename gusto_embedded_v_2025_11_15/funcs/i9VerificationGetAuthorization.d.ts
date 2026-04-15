import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's I-9 authorization
 *
 * @remarks
 * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
 *
 * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
 *
 * scope: `i9_authorizations:read`
 */
export declare function i9VerificationGetAuthorization(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdI9AuthorizationResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=i9VerificationGetAuthorization.d.ts.map