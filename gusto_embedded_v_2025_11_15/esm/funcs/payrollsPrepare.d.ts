import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse } from "../models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Prepare a payroll for update
 *
 * @remarks
 * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
 * Results are paginated, with a maximum page size of 100 employee_compensations.
 *
 * Notes:
 *  * Will null out calculated_at & totals if a payroll has already been calculated.
 *  * Will return the version param used for updating the payroll
 *
 * scope: `payrolls:write`
 */
export declare function payrollsPrepare(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=payrollsPrepare.d.ts.map