import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesUpdateHistoricalMutationVariables = {
    request: operations.PutV1HistoricalEmployeesRequest;
    options?: RequestOptions;
};
export type EmployeesUpdateHistoricalMutationData = components.Employee;
/**
 * Update a historical employee
 *
 * @remarks
 * Update a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeesUpdateHistoricalMutation(options?: MutationHookOptions<EmployeesUpdateHistoricalMutationData, Error, EmployeesUpdateHistoricalMutationVariables>): UseMutationResult<EmployeesUpdateHistoricalMutationData, Error, EmployeesUpdateHistoricalMutationVariables>;
export declare function mutationKeyEmployeesUpdateHistorical(): MutationKey;
export declare function buildEmployeesUpdateHistoricalMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesUpdateHistoricalMutationVariables) => Promise<EmployeesUpdateHistoricalMutationData>;
};
//# sourceMappingURL=employeesUpdateHistorical.d.ts.map