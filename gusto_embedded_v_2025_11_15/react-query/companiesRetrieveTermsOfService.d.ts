import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesRetrieveTermsOfServiceMutationVariables = {
    request: operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest;
    options?: RequestOptions;
};
export type CompaniesRetrieveTermsOfServiceMutationData = operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse;
/**
 * Retrieve terms of service status for a company user
 *
 * @remarks
 * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 *
 * scope: `terms_of_services:read`
 */
export declare function useCompaniesRetrieveTermsOfServiceMutation(options?: MutationHookOptions<CompaniesRetrieveTermsOfServiceMutationData, Error, CompaniesRetrieveTermsOfServiceMutationVariables>): UseMutationResult<CompaniesRetrieveTermsOfServiceMutationData, Error, CompaniesRetrieveTermsOfServiceMutationVariables>;
export declare function mutationKeyCompaniesRetrieveTermsOfService(): MutationKey;
export declare function buildCompaniesRetrieveTermsOfServiceMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesRetrieveTermsOfServiceMutationVariables) => Promise<CompaniesRetrieveTermsOfServiceMutationData>;
};
//# sourceMappingURL=companiesRetrieveTermsOfService.d.ts.map