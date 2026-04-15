import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function externalPayrollsGet(client: GustoEmbeddedCore, request: operations.GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyExternalPayrollsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsGet.d.ts.map