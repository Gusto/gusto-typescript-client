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
 * Cancel a payroll
 *
 * @remarks
 * Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
 * - `processed` is true
 * - Current time is earlier than 3:30pm PT on the payroll_deadline
 *
 * scope: `payrolls:run`
 */
export declare function payrollsCancel(client: GustoEmbeddedCore, request: operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, options?: RequestOptions): APIPromise<Result<operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsCancel.d.ts.map