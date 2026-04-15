import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TimeOffPoliciesCalculateAccruingHoursMutationVariables = {
    request: operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest;
    options?: RequestOptions;
};
export type TimeOffPoliciesCalculateAccruingHoursMutationData = Array<components.AccruingTimeOffHour>;
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
export declare function useTimeOffPoliciesCalculateAccruingHoursMutation(options?: MutationHookOptions<TimeOffPoliciesCalculateAccruingHoursMutationData, Error, TimeOffPoliciesCalculateAccruingHoursMutationVariables>): UseMutationResult<TimeOffPoliciesCalculateAccruingHoursMutationData, Error, TimeOffPoliciesCalculateAccruingHoursMutationVariables>;
export declare function mutationKeyTimeOffPoliciesCalculateAccruingHours(): MutationKey;
export declare function buildTimeOffPoliciesCalculateAccruingHoursMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TimeOffPoliciesCalculateAccruingHoursMutationVariables) => Promise<TimeOffPoliciesCalculateAccruingHoursMutationData>;
};
//# sourceMappingURL=timeOffPoliciesCalculateAccruingHours.d.ts.map