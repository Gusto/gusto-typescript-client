import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesCreateAdminMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdAdminsRequest;
    options?: RequestOptions;
};
export type CompaniesCreateAdminMutationData = operations.PostV1CompaniesCompanyIdAdminsResponse;
/**
 * Create an admin for the company
 *
 * @remarks
 * Creates a new admin for a company.
 * If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
 *
 * scope: `company_admin:write`
 */
export declare function useCompaniesCreateAdminMutation(options?: MutationHookOptions<CompaniesCreateAdminMutationData, Error, CompaniesCreateAdminMutationVariables>): UseMutationResult<CompaniesCreateAdminMutationData, Error, CompaniesCreateAdminMutationVariables>;
export declare function mutationKeyCompaniesCreateAdmin(): MutationKey;
export declare function buildCompaniesCreateAdminMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesCreateAdminMutationVariables) => Promise<CompaniesCreateAdminMutationData>;
};
//# sourceMappingURL=companiesCreateAdmin.d.ts.map