import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody } from "../models/errors/putv1partnermanagedcompaniescompanyuuidmigrate.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse } from "../models/operations/putv1partnermanagedcompaniescompanyuuidmigrate.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesMigrateMutationVariables = {
    request: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest;
    options?: RequestOptions;
};
export type CompaniesMigrateMutationData = PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse;
export type CompaniesMigrateMutationError = PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
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
export declare function useCompaniesMigrateMutation(options?: MutationHookOptions<CompaniesMigrateMutationData, CompaniesMigrateMutationError, CompaniesMigrateMutationVariables>): UseMutationResult<CompaniesMigrateMutationData, CompaniesMigrateMutationError, CompaniesMigrateMutationVariables>;
export declare function mutationKeyCompaniesMigrate(): MutationKey;
export declare function buildCompaniesMigrateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesMigrateMutationVariables) => Promise<CompaniesMigrateMutationData>;
};
//# sourceMappingURL=companiesMigrate.d.ts.map