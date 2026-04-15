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
 * Accept terms of service for a company user
 *
 * @remarks
 * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 * The user must have a role in the company in order to accept the Terms of Service.
 *
 * scope: `terms_of_services:write`
 */
export declare function companiesAcceptTermsOfService(client: GustoEmbeddedCore, request: operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, options?: RequestOptions): APIPromise<Result<operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesAcceptTermsOfService.d.ts.map