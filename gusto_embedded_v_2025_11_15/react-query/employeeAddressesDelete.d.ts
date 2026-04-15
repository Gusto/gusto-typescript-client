import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesDeleteMutationVariables = {
    request: operations.DeleteV1HomeAddressesHomeAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesDeleteMutationData = operations.DeleteV1HomeAddressesHomeAddressUuidResponse;
/**
 * Delete an employee's home address
 *
 * @remarks
 * Used for deleting an employee's home address.  Cannot delete the employee's active home address.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeAddressesDeleteMutation(options?: MutationHookOptions<EmployeeAddressesDeleteMutationData, Error, EmployeeAddressesDeleteMutationVariables>): UseMutationResult<EmployeeAddressesDeleteMutationData, Error, EmployeeAddressesDeleteMutationVariables>;
export declare function mutationKeyEmployeeAddressesDelete(): MutationKey;
export declare function buildEmployeeAddressesDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesDeleteMutationVariables) => Promise<EmployeeAddressesDeleteMutationData>;
};
//# sourceMappingURL=employeeAddressesDelete.d.ts.map