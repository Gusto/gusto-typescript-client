import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { PutV1HistoricalEmployeesRequest, PutV1HistoricalEmployeesResponse } from "../models/operations/putv1historicalemployees.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a historical employee
 *
 * @remarks
 * Update a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function historicalEmployeesUpdate(client: GustoEmbeddedCore, request: PutV1HistoricalEmployeesRequest, options?: RequestOptions): APIPromise<Result<PutV1HistoricalEmployeesResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=historicalEmployeesUpdate.d.ts.map