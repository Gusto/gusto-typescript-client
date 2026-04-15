import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesPostAssignmentPreviewMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest;
    options?: RequestOptions;
};
export type PaySchedulesPostAssignmentPreviewMutationData = components.PayScheduleAssignmentPreview;
/**
 * Preview pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesPostAssignmentPreviewMutation(options?: MutationHookOptions<PaySchedulesPostAssignmentPreviewMutationData, Error, PaySchedulesPostAssignmentPreviewMutationVariables>): UseMutationResult<PaySchedulesPostAssignmentPreviewMutationData, Error, PaySchedulesPostAssignmentPreviewMutationVariables>;
export declare function mutationKeyPaySchedulesPostAssignmentPreview(): MutationKey;
export declare function buildPaySchedulesPostAssignmentPreviewMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesPostAssignmentPreviewMutationVariables) => Promise<PaySchedulesPostAssignmentPreviewMutationData>;
};
//# sourceMappingURL=paySchedulesPostAssignmentPreview.d.ts.map