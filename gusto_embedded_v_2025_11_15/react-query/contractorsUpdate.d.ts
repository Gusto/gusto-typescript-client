import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorsUpdateMutationVariables = {
    request: operations.PutV1ContractorsContractorUuidRequest;
    options?: RequestOptions;
};
export type ContractorsUpdateMutationData = operations.PutV1ContractorsContractorUuidResponse;
/**
 * Update a contractor
 *
 * @remarks
 * Update a contractor.
 *
 * scope: `contractors:write`
 *
 * > 🚧 Warning
 * >
 * > Watch out when changing a contractor's type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
 */
export declare function useContractorsUpdateMutation(options?: MutationHookOptions<ContractorsUpdateMutationData, Error, ContractorsUpdateMutationVariables>): UseMutationResult<ContractorsUpdateMutationData, Error, ContractorsUpdateMutationVariables>;
export declare function mutationKeyContractorsUpdate(): MutationKey;
export declare function buildContractorsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorsUpdateMutationVariables) => Promise<ContractorsUpdateMutationData>;
};
//# sourceMappingURL=contractorsUpdate.d.ts.map