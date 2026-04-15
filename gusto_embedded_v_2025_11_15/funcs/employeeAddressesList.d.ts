import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's work addresses
 *
 * @remarks
 * Returns a list of an employee's work addresses. Each address includes its effective date and a boolean
 * signifying if it is the currently active work address.
 *
 * scope: `employees:read`
 */
export declare function employeeAddressesList(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdWorkAddressesRequest, options?: RequestOptions): Promise<Result<Array<components.EmployeeWorkAddress>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeAddressesList.d.ts.map