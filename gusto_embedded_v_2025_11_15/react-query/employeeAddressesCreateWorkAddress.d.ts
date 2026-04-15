import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesCreateWorkAddressMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdWorkAddressesRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesCreateWorkAddressMutationData = operations.PostV1EmployeesEmployeeIdWorkAddressesResponse;
/**
 * Create an employee work address
 *
 * @remarks
 * The work address of an employee describes when an employee began working at an associated company location.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeeAddressesCreateWorkAddressMutation(options?: MutationHookOptions<EmployeeAddressesCreateWorkAddressMutationData, Error, EmployeeAddressesCreateWorkAddressMutationVariables>): UseMutationResult<EmployeeAddressesCreateWorkAddressMutationData, Error, EmployeeAddressesCreateWorkAddressMutationVariables>;
export declare function mutationKeyEmployeeAddressesCreateWorkAddress(): MutationKey;
export declare function buildEmployeeAddressesCreateWorkAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesCreateWorkAddressMutationVariables) => Promise<EmployeeAddressesCreateWorkAddressMutationData>;
};
//# sourceMappingURL=employeeAddressesCreateWorkAddress.d.ts.map