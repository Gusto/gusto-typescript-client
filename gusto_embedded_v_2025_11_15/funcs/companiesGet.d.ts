import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a company
 *
 * @remarks
 * Get a company.
 * The employees:read scope is required to return home_address and non-work locations.
 * The company_admin:read scope is required to return primary_payroll_admin.
 * The signatories:read scope is required to return primary_signatory.
 *
 * scope: `companies:read`
 */
export declare function companiesGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesGet.d.ts.map