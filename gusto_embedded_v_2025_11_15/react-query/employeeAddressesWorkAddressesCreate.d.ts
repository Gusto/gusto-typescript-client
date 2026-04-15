import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesWorkAddressesCreateMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdWorkAddressesRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesWorkAddressesCreateMutationData = components.EmployeeWorkAddress;
/**
 * Create an employee work address
 *
 * @remarks
 * The work address of an employee describes when an employee began working at an associated company location.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeeAddressesWorkAddressesCreateMutation(options?: MutationHookOptions<EmployeeAddressesWorkAddressesCreateMutationData, Error, EmployeeAddressesWorkAddressesCreateMutationVariables>): UseMutationResult<EmployeeAddressesWorkAddressesCreateMutationData, Error, EmployeeAddressesWorkAddressesCreateMutationVariables>;
export declare function mutationKeyEmployeeAddressesWorkAddressesCreate(): MutationKey;
export declare function buildEmployeeAddressesWorkAddressesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesWorkAddressesCreateMutationVariables) => Promise<EmployeeAddressesWorkAddressesCreateMutationData>;
};
//# sourceMappingURL=employeeAddressesWorkAddressesCreate.d.ts.map