import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdPaySchedulesRequest, PostV1CompaniesCompanyIdPaySchedulesResponse } from "../models/operations/postv1companiescompanyidpayschedules.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
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
export declare function paySchedulesCreate(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdPaySchedulesResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesCreate.d.ts.map