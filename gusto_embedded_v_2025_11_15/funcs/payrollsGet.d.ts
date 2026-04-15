import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a single payroll
 *
 * @remarks
 * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
 * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
 * * To return future payrolls, you must include an `end_date` in the future.
 * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
 *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
 *
 * scope: `payrolls:read`
 */
export declare function payrollsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGet.d.ts.map