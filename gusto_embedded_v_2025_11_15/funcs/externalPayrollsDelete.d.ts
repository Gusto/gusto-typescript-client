import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an external payroll
 *
 * @remarks
 * Delete an external payroll.
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsDelete(client: GustoEmbeddedCore, request: operations.DeleteV1ExternalPayrollRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1ExternalPayrollResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsDelete.d.ts.map