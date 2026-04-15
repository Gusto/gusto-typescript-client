import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeesCreateHistoricalMutationVariables = {
    request: operations.PostV1HistoricalEmployeesRequest;
    options?: RequestOptions;
};
export type EmployeesCreateHistoricalMutationData = operations.PostV1HistoricalEmployeesResponse;
/**
 * Create a historical employee
 *
 * @remarks
 * Create a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function useEmployeesCreateHistoricalMutation(options?: MutationHookOptions<EmployeesCreateHistoricalMutationData, Error, EmployeesCreateHistoricalMutationVariables>): UseMutationResult<EmployeesCreateHistoricalMutationData, Error, EmployeesCreateHistoricalMutationVariables>;
export declare function mutationKeyEmployeesCreateHistorical(): MutationKey;
export declare function buildEmployeesCreateHistoricalMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeesCreateHistoricalMutationVariables) => Promise<EmployeesCreateHistoricalMutationData>;
};
//# sourceMappingURL=employeesCreateHistorical.d.ts.map