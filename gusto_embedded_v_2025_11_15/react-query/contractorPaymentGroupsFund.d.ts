import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentGroupsFundMutationVariables = {
    request: operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest;
    options?: RequestOptions;
};
export type ContractorPaymentGroupsFundMutationData = operations.PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse;
/**
 * Fund a contractor payment group [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Simulate funding a contractor payment group. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment group's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentGroupsFundMutation(options?: MutationHookOptions<ContractorPaymentGroupsFundMutationData, Error, ContractorPaymentGroupsFundMutationVariables>): UseMutationResult<ContractorPaymentGroupsFundMutationData, Error, ContractorPaymentGroupsFundMutationVariables>;
export declare function mutationKeyContractorPaymentGroupsFund(): MutationKey;
export declare function buildContractorPaymentGroupsFundMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentGroupsFundMutationVariables) => Promise<ContractorPaymentGroupsFundMutationData>;
};
//# sourceMappingURL=contractorPaymentGroupsFund.d.ts.map