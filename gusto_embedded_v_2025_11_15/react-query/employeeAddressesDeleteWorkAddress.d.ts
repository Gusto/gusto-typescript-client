import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeAddressesDeleteWorkAddressMutationVariables = {
    request: operations.DeleteV1WorkAddressesWorkAddressUuidRequest;
    options?: RequestOptions;
};
export type EmployeeAddressesDeleteWorkAddressMutationData = operations.DeleteV1WorkAddressesWorkAddressUuidResponse;
/**
 * Delete an employee's work address
 *
 * @remarks
 * Used for deleting an employee's work address.  Cannot delete the employee's active work address.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeeAddressesDeleteWorkAddressMutation(options?: MutationHookOptions<EmployeeAddressesDeleteWorkAddressMutationData, Error, EmployeeAddressesDeleteWorkAddressMutationVariables>): UseMutationResult<EmployeeAddressesDeleteWorkAddressMutationData, Error, EmployeeAddressesDeleteWorkAddressMutationVariables>;
export declare function mutationKeyEmployeeAddressesDeleteWorkAddress(): MutationKey;
export declare function buildEmployeeAddressesDeleteWorkAddressMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeAddressesDeleteWorkAddressMutationVariables) => Promise<EmployeeAddressesDeleteWorkAddressMutationData>;
};
//# sourceMappingURL=employeeAddressesDeleteWorkAddress.d.ts.map