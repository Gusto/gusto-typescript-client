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
 * Delete an employee's work address
 *
 * @remarks
 * Used for deleting an employee's work address.  Cannot delete the employee's active work address.
 *
 * scope: `employees:manage`
 */
export declare function employeeAddressesDeleteWorkAddress(client: GustoEmbeddedCore, request: operations.DeleteV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1WorkAddressesWorkAddressUuidResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeAddressesDeleteWorkAddress.d.ts.map