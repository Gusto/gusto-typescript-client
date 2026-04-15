import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentMethodUpdateMutationVariables = {
    request: operations.PutV1ContractorsContractorIdPaymentMethodRequest;
    options?: RequestOptions;
};
export type ContractorPaymentMethodUpdateMutationData = operations.PutV1ContractorsContractorIdPaymentMethodResponse;
/**
 * Update a contractor's payment method
 *
 * @remarks
 * Updates a contractor's payment method. Note that creating a contractor
 * bank account will also update the contractor's payment method.
 *
 * scope: `contractor_payment_methods:write`
 */
export declare function useContractorPaymentMethodUpdateMutation(options?: MutationHookOptions<ContractorPaymentMethodUpdateMutationData, Error, ContractorPaymentMethodUpdateMutationVariables>): UseMutationResult<ContractorPaymentMethodUpdateMutationData, Error, ContractorPaymentMethodUpdateMutationVariables>;
export declare function mutationKeyContractorPaymentMethodUpdate(): MutationKey;
export declare function buildContractorPaymentMethodUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentMethodUpdateMutationVariables) => Promise<ContractorPaymentMethodUpdateMutationData>;
};
//# sourceMappingURL=contractorPaymentMethodUpdate.d.ts.map