import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsCreateRehireMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdRehireRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsCreateRehireMutationData = operations.PostV1EmployeesEmployeeIdRehireResponse;
/**
 * Create an employee rehire
 *
 * @remarks
 * Rehire is created whenever an employee is scheduled to return to the company.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsCreateRehireMutation(options?: MutationHookOptions<EmployeeEmploymentsCreateRehireMutationData, Error, EmployeeEmploymentsCreateRehireMutationVariables>): UseMutationResult<EmployeeEmploymentsCreateRehireMutationData, Error, EmployeeEmploymentsCreateRehireMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsCreateRehire(): MutationKey;
export declare function buildEmployeeEmploymentsCreateRehireMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsCreateRehireMutationVariables) => Promise<EmployeeEmploymentsCreateRehireMutationData>;
};
//# sourceMappingURL=employeeEmploymentsCreateRehire.d.ts.map