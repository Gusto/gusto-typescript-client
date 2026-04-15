import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EarningTypesCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdEarningTypesRequest;
    options?: RequestOptions;
};
export type EarningTypesCreateMutationData = operations.PostV1CompaniesCompanyIdEarningTypesResponse;
/**
 * Create a custom earning type
 *
 * @remarks
 * Create a custom earning type.
 *
 * If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.
 *
 * scope: `payrolls:write`
 */
export declare function useEarningTypesCreateMutation(options?: MutationHookOptions<EarningTypesCreateMutationData, Error, EarningTypesCreateMutationVariables>): UseMutationResult<EarningTypesCreateMutationData, Error, EarningTypesCreateMutationVariables>;
export declare function mutationKeyEarningTypesCreate(): MutationKey;
export declare function buildEarningTypesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EarningTypesCreateMutationVariables) => Promise<EarningTypesCreateMutationData>;
};
//# sourceMappingURL=earningTypesCreate.d.ts.map