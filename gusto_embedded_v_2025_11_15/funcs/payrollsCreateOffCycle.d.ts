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
 * Create an off-cycle payroll
 *
 * @remarks
 * Creates a new, unprocessed, off-cycle payroll.
 *
 * ## `off_cycle_reason`
 * By default:
 * - External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
 * - All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.
 *
 * These elections can be overridden with the `skip_regular_deductions` boolean.
 *
 * scope: `payrolls:run`
 */
export declare function payrollsCreateOffCycle(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdPayrollsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsCreateOffCycle.d.ts.map