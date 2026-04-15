import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function payrollsListReversals(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): Promise<Result<components.PayrollReversal, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsListReversals.d.ts.map