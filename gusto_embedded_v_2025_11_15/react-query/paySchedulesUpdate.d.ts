import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest;
    options?: RequestOptions;
};
export type PaySchedulesUpdateMutationData = operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse;
/**
 * Update a pay schedule
 *
 * @remarks
 * Updates a pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesUpdateMutation(options?: MutationHookOptions<PaySchedulesUpdateMutationData, Error, PaySchedulesUpdateMutationVariables>): UseMutationResult<PaySchedulesUpdateMutationData, Error, PaySchedulesUpdateMutationVariables>;
export declare function mutationKeyPaySchedulesUpdate(): MutationKey;
export declare function buildPaySchedulesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesUpdateMutationVariables) => Promise<PaySchedulesUpdateMutationData>;
};
//# sourceMappingURL=paySchedulesUpdate.d.ts.map