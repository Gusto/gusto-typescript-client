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
 * Delete an employee's home address
 *
 * @remarks
 * Used for deleting an employee's home address.  Cannot delete the employee's active home address.
 *
 * scope: `employees:write`
 */
export declare function employeeAddressesDelete(client: GustoEmbeddedCore, request: operations.DeleteV1HomeAddressesHomeAddressUuidRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1HomeAddressesHomeAddressUuidResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeAddressesDelete.d.ts.map