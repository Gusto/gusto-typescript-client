import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentsCancelMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest;
    options?: RequestOptions;
};
export type ContractorPaymentsCancelMutationData = void;
/**
 * Cancel a contractor payment
 *
 * @remarks
 * Cancels and deletes a contractor payment. If the contractor payment has already started processing ("may_cancel": true), the payment cannot be cancelled.
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentsCancelMutation(options?: MutationHookOptions<ContractorPaymentsCancelMutationData, Error, ContractorPaymentsCancelMutationVariables>): UseMutationResult<ContractorPaymentsCancelMutationData, Error, ContractorPaymentsCancelMutationVariables>;
export declare function mutationKeyContractorPaymentsCancel(): MutationKey;
export declare function buildContractorPaymentsCancelMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentsCancelMutationVariables) => Promise<ContractorPaymentsCancelMutationData>;
};
//# sourceMappingURL=contractorPaymentsCancel.d.ts.map