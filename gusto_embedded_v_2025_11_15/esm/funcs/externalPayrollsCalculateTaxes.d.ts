import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { GetV1ExternalPayrollCalculateTaxesRequest, GetV1ExternalPayrollCalculateTaxesResponse } from "../models/operations/getv1externalpayrollcalculatetaxes.js";
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
export declare function externalPayrollsCalculateTaxes(client: GustoEmbeddedCore, request: GetV1ExternalPayrollCalculateTaxesRequest, options?: RequestOptions): APIPromise<Result<GetV1ExternalPayrollCalculateTaxesResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsCalculateTaxes.d.ts.map