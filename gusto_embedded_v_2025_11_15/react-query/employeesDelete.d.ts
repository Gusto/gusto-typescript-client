import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesDeleteMutationVariables = {
    request: operations.DeleteV1EmployeeRequest;
    options?: RequestOptions;
};
export type EmployeesDeleteMutationData = operations.DeleteV1EmployeeResponse;
/**
 * Delete an onboarding employee
 *
 * @remarks
 * Use this endpoint to delete an employee who is in onboarding. Deleting
 * an onboarded employee is not allowed and will return a 422 response. Please check out the Terminations api
 * if you need to terminate an onboarded employee.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeesDeleteMutation(options?: MutationHookOptions<EmployeesDeleteMutationData, Error, EmployeesDeleteMutationVariables>): UseMutationResult<EmployeesDeleteMutationData, Error, EmployeesDeleteMutationVariables>;
export declare function mutationKeyEmployeesDelete(): MutationKey;
export declare function buildEmployeesDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesDeleteMutationVariables) => Promise<EmployeesDeleteMutationData>;
};
//# sourceMappingURL=employeesDelete.d.ts.map