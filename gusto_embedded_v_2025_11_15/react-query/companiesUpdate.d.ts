import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesUpdateMutationVariables = {
    request: operations.PutV1CompaniesRequest;
    options?: RequestOptions;
};
export type CompaniesUpdateMutationData = operations.PutV1CompaniesResponse;
/**
 * Update a company
 *
 * @remarks
 * Update a company.
 *
 * scope: `companies:write`
 */
export declare function useCompaniesUpdateMutation(options?: MutationHookOptions<CompaniesUpdateMutationData, Error, CompaniesUpdateMutationVariables>): UseMutationResult<CompaniesUpdateMutationData, Error, CompaniesUpdateMutationVariables>;
export declare function mutationKeyCompaniesUpdate(): MutationKey;
export declare function buildCompaniesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesUpdateMutationVariables) => Promise<CompaniesUpdateMutationData>;
};
//# sourceMappingURL=companiesUpdate.d.ts.map