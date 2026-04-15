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
 * Create a partner managed company
 *
 * @remarks
 * Create a partner managed company. When you successfully call the API, it does the following:
 * * Creates a new company in Gusto
 * * Creates a new user using the provided email if the user does not already exist.
 * * Makes the user the primary payroll administrator of the new company.
 *
 * In response, you will receive oauth access tokens for the created company.
 *
 * IMPORTANT: the returned access and refresh tokens are reserved for this company only. They cannot be used to access other companies AND previously granted tokens cannot be used to access this company.
 *
 * > 📘 System Access Authentication
 * >
 * > this endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)
 */
export declare function companiesCreatePartnerManaged(client: GustoEmbeddedCore, security: operations.PostV1PartnerManagedCompaniesSecurity, request: operations.PostV1PartnerManagedCompaniesRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1PartnerManagedCompaniesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesCreatePartnerManaged.d.ts.map