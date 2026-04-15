import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentGroupsPreviewMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest;
    options?: RequestOptions;
};
export type ContractorPaymentGroupsPreviewMutationData = operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse;
/**
 * Preview a contractor payment group
 *
 * @remarks
 * Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsPreviewMutation(options?: MutationHookOptions<ContractorPaymentGroupsPreviewMutationData, Error, ContractorPaymentGroupsPreviewMutationVariables>): UseMutationResult<ContractorPaymentGroupsPreviewMutationData, Error, ContractorPaymentGroupsPreviewMutationVariables>;
export declare function mutationKeyContractorPaymentGroupsPreview(): MutationKey;
export declare function buildContractorPaymentGroupsPreviewMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentGroupsPreviewMutationVariables) => Promise<ContractorPaymentGroupsPreviewMutationData>;
};
//# sourceMappingURL=contractorPaymentGroupsPreview.d.ts.map