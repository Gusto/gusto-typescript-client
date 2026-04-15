import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesCreatePartnerManagedMutationVariables = {
    security: operations.PostV1PartnerManagedCompaniesSecurity;
    request: operations.PostV1PartnerManagedCompaniesRequest;
    options?: RequestOptions;
};
export type CompaniesCreatePartnerManagedMutationData = operations.PostV1PartnerManagedCompaniesResponse;
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
export declare function useCompaniesCreatePartnerManagedMutation(options?: MutationHookOptions<CompaniesCreatePartnerManagedMutationData, Error, CompaniesCreatePartnerManagedMutationVariables>): UseMutationResult<CompaniesCreatePartnerManagedMutationData, Error, CompaniesCreatePartnerManagedMutationVariables>;
export declare function mutationKeyCompaniesCreatePartnerManaged(): MutationKey;
export declare function buildCompaniesCreatePartnerManagedMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesCreatePartnerManagedMutationVariables) => Promise<CompaniesCreatePartnerManagedMutationData>;
};
//# sourceMappingURL=companiesCreatePartnerManaged.d.ts.map