import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse } from "../models/operations/getv1companiescompanyidunprocessedterminationpayperiods.js";
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
export declare function paySchedulesGetUnprocessedTerminationPeriods(client: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesGetUnprocessedTerminationPeriods.d.ts.map