import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type GarnishmentsCreateMutationVariables = {
    request: operations.PostV1EmployeesEmployeeIdGarnishmentsRequest;
    options?: RequestOptions;
};
export type GarnishmentsCreateMutationData = operations.PostV1EmployeesEmployeeIdGarnishmentsResponse;
/**
 * Create a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:write`
 */
export declare function useGarnishmentsCreateMutation(options?: MutationHookOptions<GarnishmentsCreateMutationData, Error, GarnishmentsCreateMutationVariables>): UseMutationResult<GarnishmentsCreateMutationData, Error, GarnishmentsCreateMutationVariables>;
export declare function mutationKeyGarnishmentsCreate(): MutationKey;
export declare function buildGarnishmentsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: GarnishmentsCreateMutationVariables) => Promise<GarnishmentsCreateMutationData>;
};
//# sourceMappingURL=garnishmentsCreate.d.ts.map