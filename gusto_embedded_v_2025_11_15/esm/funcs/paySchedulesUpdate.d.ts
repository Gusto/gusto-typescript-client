import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse } from "../models/operations/putv1companiescompanyidpayschedulespayscheduleid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
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
export declare function paySchedulesUpdate(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesUpdate.d.ts.map