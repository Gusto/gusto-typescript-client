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
 * Generate printable payroll checks (pdf)
 *
 * @remarks
 * This endpoint initiates the generation of employee checks for the payroll specified by payroll_uuid. A generation status and corresponding request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.
 *
 * scope: `generated_documents:write`
 */
export declare function payrollsGeneratePrintableChecks(client: GustoEmbeddedCore, request: operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGeneratePrintableChecks.d.ts.map