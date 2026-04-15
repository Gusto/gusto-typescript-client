import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1ExternalPayrollRequest, PutV1ExternalPayrollResponse } from "../models/operations/putv1externalpayroll.js";
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
export declare function externalPayrollsUpdate(client: GustoEmbeddedCore, request: PutV1ExternalPayrollRequest, options?: RequestOptions): APIPromise<Result<PutV1ExternalPayrollResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsUpdate.d.ts.map