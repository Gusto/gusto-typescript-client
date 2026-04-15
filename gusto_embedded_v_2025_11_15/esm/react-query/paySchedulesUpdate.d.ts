import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "../models/operations/putv1companiescompanyidpayschedulespayscheduleid.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesUpdateMutationVariables = {
    request: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest;
    options?: RequestOptions;
};
export type PaySchedulesUpdateMutationData = PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse;
export type PaySchedulesUpdateMutationError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Update a pay schedule
 *
 * @remarks
 * Updates a pay schedule. The `version` parameter from the GET response is required for [optimistic concurrency](doc:api-fundamentals); a mismatch returns 409 Conflict.
 *
 * ### Pay schedules may be automatically adjusted
 * If an onboarded company misses their first pay date, the pay schedule may be automatically adjusted.
 *
 * ### Webhooks
 * - `pay_schedule.updated`: Fires when a pay schedule is successfully updated.
 *
 * ### Related guides
 * - [Create a pay schedule](doc:create-a-pay-schedule)
 * - [Manage Pay Schedules via API](doc:manage-pay-schedules-api)
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesUpdateMutation(options?: MutationHookOptions<PaySchedulesUpdateMutationData, PaySchedulesUpdateMutationError, PaySchedulesUpdateMutationVariables>): UseMutationResult<PaySchedulesUpdateMutationData, PaySchedulesUpdateMutationError, PaySchedulesUpdateMutationVariables>;
export declare function mutationKeyPaySchedulesUpdate(): MutationKey;
export declare function buildPaySchedulesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesUpdateMutationVariables) => Promise<PaySchedulesUpdateMutationData>;
};
//# sourceMappingURL=paySchedulesUpdate.d.ts.map