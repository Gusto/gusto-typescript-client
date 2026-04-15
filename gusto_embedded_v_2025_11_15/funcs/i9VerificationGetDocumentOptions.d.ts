import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's I-9 verification document options
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint returns the possible document options based on the employee's authorization status. These options can then be used to create the I-9 verification documents.
 *
 * scope: `i9_authorizations:read`
 */
export declare function i9VerificationGetDocumentOptions(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=i9VerificationGetDocumentOptions.d.ts.map