import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get termination pay periods for a company
 *
 * @remarks
 * When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.
 *
 * This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.
 *
 * scope: `payrolls:read`
 */
export declare function paySchedulesGetUnprocessedTerminationPeriods(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesGetUnprocessedTerminationPeriods.d.ts.map