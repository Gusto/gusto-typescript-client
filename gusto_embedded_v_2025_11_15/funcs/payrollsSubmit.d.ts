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
 * Submit payroll
 *
 * @remarks
 * Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.
 *
 * You should poll to ensure that payroll is processed successfully, as async errors only occur after async processing is complete.
 *
 * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
 *
 * scope: `payrolls:run`
 */
export declare function payrollsSubmit(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse, errors.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsSubmit.d.ts.map