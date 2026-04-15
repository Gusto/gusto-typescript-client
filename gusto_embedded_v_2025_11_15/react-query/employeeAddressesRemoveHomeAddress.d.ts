import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesRemoveHomeAddressMutationVariables = {
    request: operations.DeleteV1HomeAddressesHomeAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesRemoveHomeAddressMutationData = void;
/**
 * Delete an employee's home address
 *
 * @remarks
 * Used for deleting an employee's home address.  Cannot delete the employee's active home address.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeAddressesRemoveHomeAddressMutation(options?: MutationHookOptions<EmployeeAddressesRemoveHomeAddressMutationData, Error, EmployeeAddressesRemoveHomeAddressMutationVariables>): UseMutationResult<EmployeeAddressesRemoveHomeAddressMutationData, Error, EmployeeAddressesRemoveHomeAddressMutationVariables>;
export declare function mutationKeyEmployeeAddressesRemoveHomeAddress(): MutationKey;
export declare function buildEmployeeAddressesRemoveHomeAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesRemoveHomeAddressMutationVariables) => Promise<EmployeeAddressesRemoveHomeAddressMutationData>;
};
//# sourceMappingURL=employeeAddressesRemoveHomeAddress.d.ts.map