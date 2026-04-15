import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EarningTypesDeactivateMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest;
    options?: RequestOptions;
};
export type EarningTypesDeactivateMutationData = void;
/**
 * Deactivate an earning type
 *
 * @remarks
 * Deactivate an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function useEarningTypesDeactivateMutation(options?: MutationHookOptions<EarningTypesDeactivateMutationData, Error, EarningTypesDeactivateMutationVariables>): UseMutationResult<EarningTypesDeactivateMutationData, Error, EarningTypesDeactivateMutationVariables>;
export declare function mutationKeyEarningTypesDeactivate(): MutationKey;
export declare function buildEarningTypesDeactivateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EarningTypesDeactivateMutationVariables) => Promise<EarningTypesDeactivateMutationData>;
};
//# sourceMappingURL=earningTypesDeactivate.d.ts.map