import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentsFundMutationVariables = {
    request: operations.GetV1ContractorPaymentsContractorPaymentUuidFundRequest;
    options?: RequestOptions;
};
export type ContractorPaymentsFundMutationData = operations.GetV1ContractorPaymentsContractorPaymentUuidFundResponse;
/**
 * Fund a contractor payment [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Simulate funding a contractor payment. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentsFundMutation(options?: MutationHookOptions<ContractorPaymentsFundMutationData, Error, ContractorPaymentsFundMutationVariables>): UseMutationResult<ContractorPaymentsFundMutationData, Error, ContractorPaymentsFundMutationVariables>;
export declare function mutationKeyContractorPaymentsFund(): MutationKey;
export declare function buildContractorPaymentsFundMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentsFundMutationVariables) => Promise<ContractorPaymentsFundMutationData>;
};
//# sourceMappingURL=contractorPaymentsFund.d.ts.map