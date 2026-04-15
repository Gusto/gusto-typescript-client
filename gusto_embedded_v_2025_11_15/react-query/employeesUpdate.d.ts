import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesUpdateMutationVariables = {
    request: operations.PutV1EmployeesRequest;
    options?: RequestOptions;
};
export type EmployeesUpdateMutationData = operations.PutV1EmployeesResponse;
/**
 * Update an employee
 *
 * @remarks
 * Update an employee.
 *
 * scope: `employees:write`
 */
export declare function useEmployeesUpdateMutation(options?: MutationHookOptions<EmployeesUpdateMutationData, Error, EmployeesUpdateMutationVariables>): UseMutationResult<EmployeesUpdateMutationData, Error, EmployeesUpdateMutationVariables>;
export declare function mutationKeyEmployeesUpdate(): MutationKey;
export declare function buildEmployeesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesUpdateMutationVariables) => Promise<EmployeesUpdateMutationData>;
};
//# sourceMappingURL=employeesUpdate.d.ts.map