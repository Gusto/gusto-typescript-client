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
 * Create an employee's I-9 authorization verification documents
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
 *
 * Use the document options endpoint to get the possible document types and titles, which can vary depending on the employee's authorization status.
 *
 * > 🚧 Every request must contain the complete list of documents for the Employee.
 * >
 * > Every request to this endpoint removes any previous verification document records for the employee.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function i9VerificationCreateDocuments(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=i9VerificationCreateDocuments.d.ts.map