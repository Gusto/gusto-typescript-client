import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse } from "../models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservice.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve terms of service status for an admin
 *
 * @remarks
 * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 *
 * scope: `terms_of_services:read`
 */
export declare function companiesRetrieveTermsOfService(client: GustoEmbeddedCore, request: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, options?: RequestOptions): APIPromise<Result<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companiesRetrieveTermsOfService.d.ts.map