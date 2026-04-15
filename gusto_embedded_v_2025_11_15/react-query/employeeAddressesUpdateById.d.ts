import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesUpdateByIdMutationVariables = {
    request: operations.PutV1WorkAddressesWorkAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesUpdateByIdMutationData = components.EmployeeWorkAddress;
/**
 * Update an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeeAddressesUpdateByIdMutation(options?: MutationHookOptions<EmployeeAddressesUpdateByIdMutationData, Error, EmployeeAddressesUpdateByIdMutationVariables>): UseMutationResult<EmployeeAddressesUpdateByIdMutationData, Error, EmployeeAddressesUpdateByIdMutationVariables>;
export declare function mutationKeyEmployeeAddressesUpdateById(): MutationKey;
export declare function buildEmployeeAddressesUpdateByIdMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesUpdateByIdMutationVariables) => Promise<EmployeeAddressesUpdateByIdMutationData>;
};
//# sourceMappingURL=employeeAddressesUpdateById.d.ts.map