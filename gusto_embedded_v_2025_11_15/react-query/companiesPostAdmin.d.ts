import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesPostAdminMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdAdminsRequest;
    options?: RequestOptions;
};
export type CompaniesPostAdminMutationData = components.Admin;
/**
 * Create an admin for the company
 *
 * @remarks
 * Creates a new admin for a company.
 * If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
 *
 * scope: `company_admin:write`
 */
export declare function useCompaniesPostAdminMutation(options?: MutationHookOptions<CompaniesPostAdminMutationData, Error, CompaniesPostAdminMutationVariables>): UseMutationResult<CompaniesPostAdminMutationData, Error, CompaniesPostAdminMutationVariables>;
export declare function mutationKeyCompaniesPostAdmin(): MutationKey;
export declare function buildCompaniesPostAdminMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesPostAdminMutationVariables) => Promise<CompaniesPostAdminMutationData>;
};
//# sourceMappingURL=companiesPostAdmin.d.ts.map