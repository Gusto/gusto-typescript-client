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
 * Create a new external payroll for a company
 *
 * @remarks
 * Creates a new external payroll for the company.
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsCreate(client: GustoEmbeddedCore, request: operations.PostV1ExternalPayrollRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1ExternalPayrollResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsCreate.d.ts.map