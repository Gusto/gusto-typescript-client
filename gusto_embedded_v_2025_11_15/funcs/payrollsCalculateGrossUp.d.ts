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
 * Calculate gross up
 *
 * @remarks
 * Calculates gross up earnings for an employee's payroll, given net earnings. This endpoint is only applicable to off-cycle unprocessed payrolls.
 *
 * The gross up amount must then be mapped to the corresponding fixed compensation earning type to get the correct payroll amount. For example, for bonus off-cycles, the gross up amount should be set with the Bonus earning type in the payroll `fixed_compensations` field.
 *
 * scope: `payrolls:run`
 */
export declare function payrollsCalculateGrossUp(client: GustoEmbeddedCore, request: operations.PostPayrollsGrossUpPayrollUuidRequest, options?: RequestOptions): APIPromise<Result<operations.PostPayrollsGrossUpPayrollUuidResponse, errors.PostPayrollsGrossUpPayrollUuidResponseBody | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsCalculateGrossUp.d.ts.map