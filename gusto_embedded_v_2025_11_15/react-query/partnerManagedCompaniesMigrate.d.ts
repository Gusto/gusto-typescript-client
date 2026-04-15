import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PartnerManagedCompaniesMigrateMutationVariables = {
    request: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest;
    options?: RequestOptions;
};
export type PartnerManagedCompaniesMigrateMutationData = operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody;
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
export declare function usePartnerManagedCompaniesMigrateMutation(options?: MutationHookOptions<PartnerManagedCompaniesMigrateMutationData, Error, PartnerManagedCompaniesMigrateMutationVariables>): UseMutationResult<PartnerManagedCompaniesMigrateMutationData, Error, PartnerManagedCompaniesMigrateMutationVariables>;
export declare function mutationKeyPartnerManagedCompaniesMigrate(): MutationKey;
export declare function buildPartnerManagedCompaniesMigrateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PartnerManagedCompaniesMigrateMutationVariables) => Promise<PartnerManagedCompaniesMigrateMutationData>;
};
//# sourceMappingURL=partnerManagedCompaniesMigrate.d.ts.map