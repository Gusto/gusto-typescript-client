import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EarningTypesUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest;
    options?: RequestOptions;
};
export type EarningTypesUpdateMutationData = operations.PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse;
/**
 * Update an earning type
 *
 * @remarks
 * Update an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function useEarningTypesUpdateMutation(options?: MutationHookOptions<EarningTypesUpdateMutationData, Error, EarningTypesUpdateMutationVariables>): UseMutationResult<EarningTypesUpdateMutationData, Error, EarningTypesUpdateMutationVariables>;
export declare function mutationKeyEarningTypesUpdate(): MutationKey;
export declare function buildEarningTypesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EarningTypesUpdateMutationVariables) => Promise<EarningTypesUpdateMutationData>;
};
//# sourceMappingURL=earningTypesUpdate.d.ts.map