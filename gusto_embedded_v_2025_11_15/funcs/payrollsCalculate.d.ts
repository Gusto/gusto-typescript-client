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
 * Calculate a payroll
 *
 * @remarks
 * Performs calculations for taxes, benefits, and deductions for an unprocessed payroll. The calculated payroll details provide a preview of the actual values that will be used when the payroll is run.
 *
 * This calculation is asynchronous and a successful request responds with a 202 HTTP status. To view the details of the calculated payroll, use the GET /v1/companies/{company_id}/payrolls/{payroll_id} endpoint with *include=taxes,benefits,deductions* params.
 * In v2023-04-01, *show_calculation=true* is no longer required.
 *
 * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
 */
export declare function payrollsCalculate(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse, errors.PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsCalculate.d.ts.map