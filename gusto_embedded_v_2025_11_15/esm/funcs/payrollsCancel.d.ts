import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse } from "../models/operations/putapiv1companiescompanyidpayrollspayrollidcancel.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Cancel a payroll
 *
 * @remarks
 * Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
 * - `processed` is true
 * - Current time is earlier than 3:30pm PT on the payroll_deadline
 *
 * scope: `payrolls:run`
 */
export declare function payrollsCancel(client: GustoEmbeddedCore, request: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, options?: RequestOptions): APIPromise<Result<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=payrollsCancel.d.ts.map