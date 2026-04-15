import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type HistoricalEmployeesUpdateMutationVariables = {
    request: operations.PutV1HistoricalEmployeesRequest;
    options?: RequestOptions;
};
export type HistoricalEmployeesUpdateMutationData = operations.PutV1HistoricalEmployeesResponse;
/**
 * Update a historical employee
 *
 * @remarks
 * Update a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export declare function useHistoricalEmployeesUpdateMutation(options?: MutationHookOptions<HistoricalEmployeesUpdateMutationData, Error, HistoricalEmployeesUpdateMutationVariables>): UseMutationResult<HistoricalEmployeesUpdateMutationData, Error, HistoricalEmployeesUpdateMutationVariables>;
export declare function mutationKeyHistoricalEmployeesUpdate(): MutationKey;
export declare function buildHistoricalEmployeesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: HistoricalEmployeesUpdateMutationVariables) => Promise<HistoricalEmployeesUpdateMutationData>;
};
//# sourceMappingURL=historicalEmployeesUpdate.d.ts.map