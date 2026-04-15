import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all payroll blockers for a company
 *
 * @remarks
 * Returns a list of reasons that prevent the company from running payrolls. See the [payroll blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) for a complete list of reasons.
 *
 * The list is empty if there are no payroll blockers.
 *
 * scope: `payrolls:run`
 */
export declare function payrollsGetBlockers(client: GustoEmbeddedCore, request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGetBlockers.d.ts.map