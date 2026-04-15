import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an employee's I-9 verification document
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint deletes a specific verification document.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function i9VerificationDeleteDocument(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=i9VerificationDeleteDocument.d.ts.map