import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee's pay stubs
 *
 * @remarks
 * Get an employee's pay stubs
 *
 * scope: `pay_stubs:read`
 */
export declare function payrollsGetPayStubs(client: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1EmployeesEmployeeUuidPayStubsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGetPayStubs.d.ts.map