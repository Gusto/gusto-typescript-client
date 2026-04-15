import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1ExternalPayrollRequest, PostV1ExternalPayrollResponse } from "../models/operations/postv1externalpayroll.js";
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
export declare function externalPayrollsCreate(client: GustoEmbeddedCore, request: PostV1ExternalPayrollRequest, options?: RequestOptions): APIPromise<Result<PostV1ExternalPayrollResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsCreate.d.ts.map