import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorsDeleteMutationVariables = {
    request: operations.DeleteV1ContractorsContractorUuidRequest;
    options?: RequestOptions;
};
export type ContractorsDeleteMutationData = operations.DeleteV1ContractorsContractorUuidResponse;
/**
 * Delete a contractor
 *
 * @remarks
 * A contractor can only be deleted when there are no contractor payments.
 *
 * scope: `contractors:manage`
 */
export declare function useContractorsDeleteMutation(options?: MutationHookOptions<ContractorsDeleteMutationData, Error, ContractorsDeleteMutationVariables>): UseMutationResult<ContractorsDeleteMutationData, Error, ContractorsDeleteMutationVariables>;
export declare function mutationKeyContractorsDelete(): MutationKey;
export declare function buildContractorsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorsDeleteMutationVariables) => Promise<ContractorsDeleteMutationData>;
};
//# sourceMappingURL=contractorsDelete.d.ts.map