import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1HistoricalEmployeesRequest, PostV1HistoricalEmployeesResponse } from "../models/operations/postv1historicalemployees.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a historical employee
 *
 * @remarks
 * Create a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function employeesCreateHistorical(client: GustoEmbeddedCore, request: PostV1HistoricalEmployeesRequest, options?: RequestOptions): APIPromise<Result<PostV1HistoricalEmployeesResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeesCreateHistorical.d.ts.map