import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody } from "../models/errors/putv1partnermanagedcompaniescompanyuuidmigrate.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse } from "../models/operations/putv1partnermanagedcompaniescompanyuuidmigrate.js";
import { APIPromise } from "../types/async.js";
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
export declare function companiesMigrate(client: GustoEmbeddedCore, request: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, options?: RequestOptions): APIPromise<Result<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companiesMigrate.d.ts.map