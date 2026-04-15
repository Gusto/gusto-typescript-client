import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export declare function wireInRequestsList(client: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetCompaniesCompanyUuidWireInRequestUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=wireInRequestsList.d.ts.map