import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function companiesListAdmins(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdAdminsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesListAdmins.d.ts.map