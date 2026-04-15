import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsDeleteRehireMutationVariables = {
    request: operations.DeleteV1EmployeesEmployeeIdRehireRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsDeleteRehireMutationData = operations.DeleteV1EmployeesEmployeeIdRehireResponse;
/**
 * Delete an employee rehire
 *
 * @remarks
 * Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsDeleteRehireMutation(options?: MutationHookOptions<EmployeeEmploymentsDeleteRehireMutationData, Error, EmployeeEmploymentsDeleteRehireMutationVariables>): UseMutationResult<EmployeeEmploymentsDeleteRehireMutationData, Error, EmployeeEmploymentsDeleteRehireMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsDeleteRehire(): MutationKey;
export declare function buildEmployeeEmploymentsDeleteRehireMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsDeleteRehireMutationVariables) => Promise<EmployeeEmploymentsDeleteRehireMutationData>;
};
//# sourceMappingURL=employeeEmploymentsDeleteRehire.d.ts.map