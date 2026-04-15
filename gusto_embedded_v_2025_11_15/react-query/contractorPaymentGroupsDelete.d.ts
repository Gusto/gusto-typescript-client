import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentGroupsDeleteMutationVariables = {
    request: operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest;
    options?: RequestOptions;
};
export type ContractorPaymentGroupsDeleteMutationData = operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse;
/**
 * Cancel a contractor payment group
 *
 * @remarks
 * Cancels a contractor payment group and all associated contractor payments. All contractor payments must be cancellable, unfunded.
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentGroupsDeleteMutation(options?: MutationHookOptions<ContractorPaymentGroupsDeleteMutationData, Error, ContractorPaymentGroupsDeleteMutationVariables>): UseMutationResult<ContractorPaymentGroupsDeleteMutationData, Error, ContractorPaymentGroupsDeleteMutationVariables>;
export declare function mutationKeyContractorPaymentGroupsDelete(): MutationKey;
export declare function buildContractorPaymentGroupsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentGroupsDeleteMutationVariables) => Promise<ContractorPaymentGroupsDeleteMutationData>;
};
//# sourceMappingURL=contractorPaymentGroupsDelete.d.ts.map