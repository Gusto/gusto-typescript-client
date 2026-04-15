import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Update a historical employee
 *
 * @remarks
 * Update a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function employeesUpdateHistorical(client: GustoEmbeddedCore, request: operations.PutV1HistoricalEmployeesRequest, options?: RequestOptions): Promise<Result<components.Employee, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesUpdateHistorical.d.ts.map