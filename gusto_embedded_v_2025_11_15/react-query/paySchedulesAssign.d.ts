import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesAssignMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignRequest;
    options?: RequestOptions;
};
export type PaySchedulesAssignMutationData = operations.PostV1CompaniesCompanyIdPaySchedulesAssignResponse;
/**
 * Assign pay schedules for a company
 *
 * @remarks
 * This endpoint assigns employees to pay schedules based on the schedule type.
 * For `by_employee` and `by_department` schedules, use the `partial_assignment` parameter to control the assignment scope. Set it to `true` for partial assignments (only some employees or departments at a time) and `false` for full assignments (all employees or departments at once).
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesAssignMutation(options?: MutationHookOptions<PaySchedulesAssignMutationData, Error, PaySchedulesAssignMutationVariables>): UseMutationResult<PaySchedulesAssignMutationData, Error, PaySchedulesAssignMutationVariables>;
export declare function mutationKeyPaySchedulesAssign(): MutationKey;
export declare function buildPaySchedulesAssignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesAssignMutationVariables) => Promise<PaySchedulesAssignMutationData>;
};
//# sourceMappingURL=paySchedulesAssign.d.ts.map