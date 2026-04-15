import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesUpdateHomeAddressMutationVariables = {
    request: operations.PutV1HomeAddressesHomeAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesUpdateHomeAddressMutationData = components.EmployeeAddress;
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
export declare function useEmployeeAddressesUpdateHomeAddressMutation(options?: MutationHookOptions<EmployeeAddressesUpdateHomeAddressMutationData, Error, EmployeeAddressesUpdateHomeAddressMutationVariables>): UseMutationResult<EmployeeAddressesUpdateHomeAddressMutationData, Error, EmployeeAddressesUpdateHomeAddressMutationVariables>;
export declare function mutationKeyEmployeeAddressesUpdateHomeAddress(): MutationKey;
export declare function buildEmployeeAddressesUpdateHomeAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesUpdateHomeAddressMutationVariables) => Promise<EmployeeAddressesUpdateHomeAddressMutationData>;
};
//# sourceMappingURL=employeeAddressesUpdateHomeAddress.d.ts.map