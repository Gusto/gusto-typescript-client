import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesCreateMutationVariables = {
    request: operations.PostV1EmployeesRequest;
    options?: RequestOptions;
};
export type EmployeesCreateMutationData = operations.PostV1EmployeesResponse;
/**
 * Create an employee
 *
 * @remarks
 * Create an employee.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeesCreateMutation(options?: MutationHookOptions<EmployeesCreateMutationData, Error, EmployeesCreateMutationVariables>): UseMutationResult<EmployeesCreateMutationData, Error, EmployeesCreateMutationVariables>;
export declare function mutationKeyEmployeesCreate(): MutationKey;
export declare function buildEmployeesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesCreateMutationVariables) => Promise<EmployeesCreateMutationData>;
};
//# sourceMappingURL=employeesCreate.d.ts.map