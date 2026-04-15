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
 * Update an employee's state taxes
 *
 * @remarks
 * Update attributes relevant for an employee's state taxes.
 *
 * As described for the GET endpoint, the answers must be supplied in the effective-dated format, but currently only a single answer will be accepted - `valid_from` and `valid_up_to` must be `"2010-01-01"` and `null` respectively.
 *
 * scope: `employee_state_taxes:write`
 */
export declare function employeeTaxSetupUpdateStateTaxes(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdStateTaxesRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdStateTaxesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeTaxSetupUpdateStateTaxes.d.ts.map