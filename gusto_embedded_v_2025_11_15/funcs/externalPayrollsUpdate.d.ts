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
 * Update an external payroll
 *
 * @remarks
 * Update an external payroll with a list of external payroll items
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsUpdate(client: GustoEmbeddedCore, request: operations.PutV1ExternalPayrollRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1ExternalPayrollResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsUpdate.d.ts.map