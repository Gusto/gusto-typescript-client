import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesPreviewAssignmentMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest;
    options?: RequestOptions;
};
export type PaySchedulesPreviewAssignmentMutationData = operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse;
/**
 * Preview pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesPreviewAssignmentMutation(options?: MutationHookOptions<PaySchedulesPreviewAssignmentMutationData, Error, PaySchedulesPreviewAssignmentMutationVariables>): UseMutationResult<PaySchedulesPreviewAssignmentMutationData, Error, PaySchedulesPreviewAssignmentMutationVariables>;
export declare function mutationKeyPaySchedulesPreviewAssignment(): MutationKey;
export declare function buildPaySchedulesPreviewAssignmentMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesPreviewAssignmentMutationVariables) => Promise<PaySchedulesPreviewAssignmentMutationData>;
};
//# sourceMappingURL=paySchedulesPreviewAssignment.d.ts.map