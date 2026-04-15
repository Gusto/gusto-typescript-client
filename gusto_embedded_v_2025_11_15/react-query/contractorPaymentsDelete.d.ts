import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentsDeleteMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest;
    options?: RequestOptions;
};
export type ContractorPaymentsDeleteMutationData = operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse;
/**
 * Cancel a contractor payment
 *
 * @remarks
 * Cancels and deletes a contractor payment. If the contractor payment has already started processing ("may_cancel": true), the payment cannot be cancelled.
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentsDeleteMutation(options?: MutationHookOptions<ContractorPaymentsDeleteMutationData, Error, ContractorPaymentsDeleteMutationVariables>): UseMutationResult<ContractorPaymentsDeleteMutationData, Error, ContractorPaymentsDeleteMutationVariables>;
export declare function mutationKeyContractorPaymentsDelete(): MutationKey;
export declare function buildContractorPaymentsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentsDeleteMutationVariables) => Promise<ContractorPaymentsDeleteMutationData>;
};
//# sourceMappingURL=contractorPaymentsDelete.d.ts.map