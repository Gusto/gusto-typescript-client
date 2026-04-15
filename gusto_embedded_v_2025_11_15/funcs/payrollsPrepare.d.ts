import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Prepare a payroll for update
 *
 * @remarks
 * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
 *
 * Notes:
 *  * Will null out calculated_at & totals if a payroll has already been calculated.
 *  * Will return the version param used for updating the payroll
 *
 * scope: `payrolls:write`
 */
export declare function payrollsPrepare(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsPrepare.d.ts.map