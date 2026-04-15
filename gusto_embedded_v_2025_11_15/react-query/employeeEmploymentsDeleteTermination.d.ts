import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsDeleteTerminationMutationVariables = {
    request: operations.DeleteV1EmployeesEmployeeIdTerminationsRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsDeleteTerminationMutationData = operations.DeleteV1EmployeesEmployeeIdTerminationsResponse;
/**
 * Delete an employee termination
 *
 * @remarks
 * Delete an employee termination.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsDeleteTerminationMutation(options?: MutationHookOptions<EmployeeEmploymentsDeleteTerminationMutationData, Error, EmployeeEmploymentsDeleteTerminationMutationVariables>): UseMutationResult<EmployeeEmploymentsDeleteTerminationMutationData, Error, EmployeeEmploymentsDeleteTerminationMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsDeleteTermination(): MutationKey;
export declare function buildEmployeeEmploymentsDeleteTerminationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsDeleteTerminationMutationVariables) => Promise<EmployeeEmploymentsDeleteTerminationMutationData>;
};
//# sourceMappingURL=employeeEmploymentsDeleteTermination.d.ts.map