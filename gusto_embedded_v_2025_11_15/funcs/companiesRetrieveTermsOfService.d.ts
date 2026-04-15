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
 * Retrieve terms of service status for a company user
 *
 * @remarks
 * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 *
 * scope: `terms_of_services:read`
 */
export declare function companiesRetrieveTermsOfService(client: GustoEmbeddedCore, request: operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, options?: RequestOptions): APIPromise<Result<operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesRetrieveTermsOfService.d.ts.map