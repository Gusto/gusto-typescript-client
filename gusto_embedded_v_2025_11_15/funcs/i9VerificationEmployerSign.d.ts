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
 * Employer sign an employee's Form I-9
 *
 * @remarks
 * Sign an employee's Form I-9 as an employer. Once the form is signed, the employee's I-9 authorization is considered complete and cannot be modified.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function i9VerificationEmployerSign(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=i9VerificationEmployerSign.d.ts.map