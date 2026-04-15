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
 * Calculate accruing time off hours
 *
 * @remarks
 * Returns a list of accruing time off for each time off policy associated with the employee.
 *
 * Factors affecting the accrued hours:
 *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
 *   * how many hours of work during this pay period
 *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
 *   * company pay schedule frequency (for per pay period)
 *
 * If none of the parameters is passed in, the accrued time off hour will be 0.
 *
 * scope: `payrolls:read`
 */
export declare function timeOffPoliciesCalculateAccruingTimeOffHours(client: GustoEmbeddedCore, request: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesCalculateAccruingTimeOffHours.d.ts.map