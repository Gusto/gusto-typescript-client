import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get tax suggestions for an external payroll
 *
 * @remarks
 * Get tax suggestions for an external payroll. Earnings and/or benefits
 * data must be saved prior to the calculation in order to retrieve accurate
 * tax calculation.
 *
 * scope: `external_payrolls:read`
 */
export declare function externalPayrollsCalculateTaxes(client: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ExternalPayrollCalculateTaxesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsCalculateTaxes.d.ts.map