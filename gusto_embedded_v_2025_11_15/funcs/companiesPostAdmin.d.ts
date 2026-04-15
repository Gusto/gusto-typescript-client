import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Create an admin for the company
 *
 * @remarks
 * Creates a new admin for a company.
 * If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
 *
 * scope: `company_admin:write`
 */
export declare function companiesPostAdmin(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<Result<components.Admin, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesPostAdmin.d.ts.map