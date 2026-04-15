import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsRehireMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdRehireRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsRehireMutationData = operations.PutV1EmployeesEmployeeIdRehireResponse;
/**
 * Update an employee rehire
 *
 * @remarks
 * Update an employee's rehire.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsRehireMutation(options?: MutationHookOptions<EmployeeEmploymentsRehireMutationData, Error, EmployeeEmploymentsRehireMutationVariables>): UseMutationResult<EmployeeEmploymentsRehireMutationData, Error, EmployeeEmploymentsRehireMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsRehire(): MutationKey;
export declare function buildEmployeeEmploymentsRehireMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsRehireMutationVariables) => Promise<EmployeeEmploymentsRehireMutationData>;
};
//# sourceMappingURL=employeeEmploymentsRehire.d.ts.map