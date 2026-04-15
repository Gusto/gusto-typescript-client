import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Migrate company to embedded payroll
 *
 * @remarks
 * Migrate an existing Gusto customer to your embedded payroll product.
 *
 * To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).
 *
 * scope: `partner_managed_companies:write`
 */
export declare function partnerManagedCompaniesMigrate(client: GustoEmbeddedCore, request: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, options?: RequestOptions): Promise<Result<operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=partnerManagedCompaniesMigrate.d.ts.map