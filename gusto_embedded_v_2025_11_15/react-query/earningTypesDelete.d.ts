import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EarningTypesDeleteMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest;
    options?: RequestOptions;
};
export type EarningTypesDeleteMutationData = operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse;
/**
 * Deactivate an earning type
 *
 * @remarks
 * Deactivate an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function useEarningTypesDeleteMutation(options?: MutationHookOptions<EarningTypesDeleteMutationData, Error, EarningTypesDeleteMutationVariables>): UseMutationResult<EarningTypesDeleteMutationData, Error, EarningTypesDeleteMutationVariables>;
export declare function mutationKeyEarningTypesDelete(): MutationKey;
export declare function buildEarningTypesDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EarningTypesDeleteMutationVariables) => Promise<EarningTypesDeleteMutationData>;
};
//# sourceMappingURL=earningTypesDelete.d.ts.map