import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesUpdateWorkAddressMutationVariables = {
    request: operations.PutV1WorkAddressesWorkAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesUpdateWorkAddressMutationData = operations.PutV1WorkAddressesWorkAddressUuidResponse;
/**
 * Update an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeeAddressesUpdateWorkAddressMutation(options?: MutationHookOptions<EmployeeAddressesUpdateWorkAddressMutationData, Error, EmployeeAddressesUpdateWorkAddressMutationVariables>): UseMutationResult<EmployeeAddressesUpdateWorkAddressMutationData, Error, EmployeeAddressesUpdateWorkAddressMutationVariables>;
export declare function mutationKeyEmployeeAddressesUpdateWorkAddress(): MutationKey;
export declare function buildEmployeeAddressesUpdateWorkAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesUpdateWorkAddressMutationVariables) => Promise<EmployeeAddressesUpdateWorkAddressMutationData>;
};
//# sourceMappingURL=employeeAddressesUpdateWorkAddress.d.ts.map