import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesDeleteHomeByIdMutationVariables = {
    request: operations.DeleteV1HomeAddressesHomeAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesDeleteHomeByIdMutationData = void;
/**
 * Delete an employee's home address
 *
 * @remarks
 * Used for deleting an employee's home address.  Cannot delete the employee's active home address.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeAddressesDeleteHomeByIdMutation(options?: MutationHookOptions<EmployeeAddressesDeleteHomeByIdMutationData, Error, EmployeeAddressesDeleteHomeByIdMutationVariables>): UseMutationResult<EmployeeAddressesDeleteHomeByIdMutationData, Error, EmployeeAddressesDeleteHomeByIdMutationVariables>;
export declare function mutationKeyEmployeeAddressesDeleteHomeById(): MutationKey;
export declare function buildEmployeeAddressesDeleteHomeByIdMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesDeleteHomeByIdMutationVariables) => Promise<EmployeeAddressesDeleteHomeByIdMutationData>;
};
//# sourceMappingURL=employeeAddressesDeleteHomeById.d.ts.map