import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsUpdateRehireMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdRehireRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsUpdateRehireMutationData = components.Rehire;
/**
 * Update an employee rehire
 *
 * @remarks
 * Update an employee's rehire.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsUpdateRehireMutation(options?: MutationHookOptions<EmployeeEmploymentsUpdateRehireMutationData, Error, EmployeeEmploymentsUpdateRehireMutationVariables>): UseMutationResult<EmployeeEmploymentsUpdateRehireMutationData, Error, EmployeeEmploymentsUpdateRehireMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsUpdateRehire(): MutationKey;
export declare function buildEmployeeEmploymentsUpdateRehireMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsUpdateRehireMutationVariables) => Promise<EmployeeEmploymentsUpdateRehireMutationData>;
};
//# sourceMappingURL=employeeEmploymentsUpdateRehire.d.ts.map