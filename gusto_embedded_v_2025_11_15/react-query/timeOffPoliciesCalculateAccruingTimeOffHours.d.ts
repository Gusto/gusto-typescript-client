import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesCalculateAccruingTimeOffHoursMutationVariables = {
    request: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesCalculateAccruingTimeOffHoursMutationData = operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse;
/**
 * Calculate accruing time off hours
 *
 * @remarks
 * Returns a list of accruing time off for each time off policy associated with the employee.
 *
 * Factors affecting the accrued hours:
 *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
 *   * how many hours of work during this pay period
 *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
 *   * company pay schedule frequency (for per pay period)
 *
 * If none of the parameters is passed in, the accrued time off hour will be 0.
 *
 * scope: `payrolls:read`
 */
export declare function useTimeOffPoliciesCalculateAccruingTimeOffHoursMutation(options?: MutationHookOptions<TimeOffPoliciesCalculateAccruingTimeOffHoursMutationData, Error, TimeOffPoliciesCalculateAccruingTimeOffHoursMutationVariables>): UseMutationResult<TimeOffPoliciesCalculateAccruingTimeOffHoursMutationData, Error, TimeOffPoliciesCalculateAccruingTimeOffHoursMutationVariables>;
export declare function mutationKeyTimeOffPoliciesCalculateAccruingTimeOffHours(): MutationKey;
export declare function buildTimeOffPoliciesCalculateAccruingTimeOffHoursMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesCalculateAccruingTimeOffHoursMutationVariables) => Promise<TimeOffPoliciesCalculateAccruingTimeOffHoursMutationData>;
};
//# sourceMappingURL=timeOffPoliciesCalculateAccruingTimeOffHours.d.ts.map