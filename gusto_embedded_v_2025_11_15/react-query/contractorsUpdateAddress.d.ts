import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorsUpdateAddressMutationVariables = {
    request: operations.PutV1ContractorsContractorUuidAddressRequest;
    options?: RequestOptions;
};
export type ContractorsUpdateAddressMutationData = operations.PutV1ContractorsContractorUuidAddressResponse;
/**
 * Update a contractor's address
 *
 * @remarks
 * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * scope: `contractors:write`
 */
export declare function useContractorsUpdateAddressMutation(options?: MutationHookOptions<ContractorsUpdateAddressMutationData, Error, ContractorsUpdateAddressMutationVariables>): UseMutationResult<ContractorsUpdateAddressMutationData, Error, ContractorsUpdateAddressMutationVariables>;
export declare function mutationKeyContractorsUpdateAddress(): MutationKey;
export declare function buildContractorsUpdateAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorsUpdateAddressMutationVariables) => Promise<ContractorsUpdateAddressMutationData>;
};
//# sourceMappingURL=contractorsUpdateAddress.d.ts.map