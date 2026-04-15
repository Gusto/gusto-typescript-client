import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesCreateMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdHomeAddressesRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesCreateMutationData = operations.PostV1EmployeesEmployeeIdHomeAddressesResponse;
/**
 * Create an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeAddressesCreateMutation(options?: MutationHookOptions<EmployeeAddressesCreateMutationData, Error, EmployeeAddressesCreateMutationVariables>): UseMutationResult<EmployeeAddressesCreateMutationData, Error, EmployeeAddressesCreateMutationVariables>;
export declare function mutationKeyEmployeeAddressesCreate(): MutationKey;
export declare function buildEmployeeAddressesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesCreateMutationVariables) => Promise<EmployeeAddressesCreateMutationData>;
};
//# sourceMappingURL=employeeAddressesCreate.d.ts.map