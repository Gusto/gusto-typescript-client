import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyUuidContractorsRequest;
    options?: RequestOptions;
};
export type ContractorsCreateMutationData = operations.PostV1CompaniesCompanyUuidContractorsResponse;
/**
 * Create a contractor
 *
 * @remarks
 * Create an individual or business contractor.
 *
 * scope: `contractors:manage`
 */
export declare function useContractorsCreateMutation(options?: MutationHookOptions<ContractorsCreateMutationData, Error, ContractorsCreateMutationVariables>): UseMutationResult<ContractorsCreateMutationData, Error, ContractorsCreateMutationVariables>;
export declare function mutationKeyContractorsCreate(): MutationKey;
export declare function buildContractorsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorsCreateMutationVariables) => Promise<ContractorsCreateMutationData>;
};
//# sourceMappingURL=contractorsCreate.d.ts.map