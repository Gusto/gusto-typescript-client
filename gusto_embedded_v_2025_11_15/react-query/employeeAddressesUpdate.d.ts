import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesUpdateMutationVariables = {
    request: operations.PutV1HomeAddressesHomeAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesUpdateMutationData = operations.PutV1HomeAddressesHomeAddressUuidResponse;
/**
 * Update an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeAddressesUpdateMutation(options?: MutationHookOptions<EmployeeAddressesUpdateMutationData, Error, EmployeeAddressesUpdateMutationVariables>): UseMutationResult<EmployeeAddressesUpdateMutationData, Error, EmployeeAddressesUpdateMutationVariables>;
export declare function mutationKeyEmployeeAddressesUpdate(): MutationKey;
export declare function buildEmployeeAddressesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesUpdateMutationVariables) => Promise<EmployeeAddressesUpdateMutationData>;
};
//# sourceMappingURL=employeeAddressesUpdate.d.ts.map