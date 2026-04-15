import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdContractorPaymentsRequest;
    options?: RequestOptions;
};
export type ContractorPaymentsCreateMutationData = operations.PostV1CompaniesCompanyIdContractorPaymentsResponse;
/**
 * Create a contractor payment
 *
 * @remarks
 * Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)
 *
 * scope: `payrolls:run`
 */
export declare function useContractorPaymentsCreateMutation(options?: MutationHookOptions<ContractorPaymentsCreateMutationData, Error, ContractorPaymentsCreateMutationVariables>): UseMutationResult<ContractorPaymentsCreateMutationData, Error, ContractorPaymentsCreateMutationVariables>;
export declare function mutationKeyContractorPaymentsCreate(): MutationKey;
export declare function buildContractorPaymentsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentsCreateMutationVariables) => Promise<ContractorPaymentsCreateMutationData>;
};
//# sourceMappingURL=contractorPaymentsCreate.d.ts.map