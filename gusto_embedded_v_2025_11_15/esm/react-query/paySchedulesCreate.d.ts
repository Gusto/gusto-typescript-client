import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdPaySchedulesRequest, PostV1CompaniesCompanyIdPaySchedulesResponse } from "../models/operations/postv1companiescompanyidpayschedules.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesCreateMutationVariables = {
    request: PostV1CompaniesCompanyIdPaySchedulesRequest;
    options?: RequestOptions;
};
export type PaySchedulesCreateMutationData = PostV1CompaniesCompanyIdPaySchedulesResponse;
export type PaySchedulesCreateMutationError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Create a new pay schedule
 *
 * @remarks
 * If a company does not have any pay schedules, this endpoint creates a single pay schedule and assigns it to all employees (common during company onboarding).
 *
 * If a company already has an active pay schedule and wants multiple pay schedules, this endpoint creates a pay schedule that is not assigned to any employee.
 *
 * Be sure to [check state laws](https://www.dol.gov/agencies/whd/state/payday) to know what schedule is right for your customers. If an onboarded company misses their first pay date, the pay schedule may be automatically adjusted.
 *
 * ### Webhooks
 * - `pay_schedule.created`: Fires when a pay schedule is successfully created.
 *
 * ### Related guides
 * - [Create a pay schedule](doc:create-a-pay-schedule)
 * - [Pay Schedules](doc:pay-schedule-info)
 * - [Manage Pay Schedules via API](doc:manage-pay-schedules-api)
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesCreateMutation(options?: MutationHookOptions<PaySchedulesCreateMutationData, PaySchedulesCreateMutationError, PaySchedulesCreateMutationVariables>): UseMutationResult<PaySchedulesCreateMutationData, PaySchedulesCreateMutationError, PaySchedulesCreateMutationVariables>;
export declare function mutationKeyPaySchedulesCreate(): MutationKey;
export declare function buildPaySchedulesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesCreateMutationVariables) => Promise<PaySchedulesCreateMutationData>;
};
//# sourceMappingURL=paySchedulesCreate.d.ts.map