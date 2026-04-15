import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentGroupsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsRequest;
    options?: RequestOptions;
};
export type ContractorPaymentGroupsCreateMutationData = operations.PostV1CompaniesCompanyIdContractorPaymentGroupsResponse;
/**
 * Create a contractor payment group
 *
 * @remarks
 * Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentGroupsCreateMutation(options?: MutationHookOptions<ContractorPaymentGroupsCreateMutationData, Error, ContractorPaymentGroupsCreateMutationVariables>): UseMutationResult<ContractorPaymentGroupsCreateMutationData, Error, ContractorPaymentGroupsCreateMutationVariables>;
export declare function mutationKeyContractorPaymentGroupsCreate(): MutationKey;
export declare function buildContractorPaymentGroupsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentGroupsCreateMutationVariables) => Promise<ContractorPaymentGroupsCreateMutationData>;
};
//# sourceMappingURL=contractorPaymentGroupsCreate.d.ts.map