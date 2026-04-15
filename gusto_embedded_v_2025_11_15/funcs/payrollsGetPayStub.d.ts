import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee pay stub (pdf)
 *
 * @remarks
 * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
 *
 * scope: `pay_stubs:read`
 */
export declare function payrollsGetPayStub(client: GustoEmbeddedCore, request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGetPayStub.d.ts.map