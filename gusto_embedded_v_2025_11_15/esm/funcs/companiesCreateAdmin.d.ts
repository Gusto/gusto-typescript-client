import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdAdminsRequest, PostV1CompaniesCompanyIdAdminsResponse } from "../models/operations/postv1companiescompanyidadmins.js";
import { APIPromise } from "../types/async.js";
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
export declare function companiesCreateAdmin(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdAdminsResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companiesCreateAdmin.d.ts.map