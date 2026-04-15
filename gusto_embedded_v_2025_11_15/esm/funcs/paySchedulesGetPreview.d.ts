import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, GetV1CompaniesCompanyIdPaySchedulesPreviewResponse } from "../models/operations/getv1companiescompanyidpayschedulespreview.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Returns a preview of pay period dates and holidays for the given parameters (e.g. frequency, anchor pay date) for the next 18 months. Use this before creating or updating a pay schedule to show expected check dates and payroll deadlines.
 *
 * ### Related guides
 * - [Create a pay schedule](doc:create-a-pay-schedule)
 * - [Manage Pay Schedules via API](doc:manage-pay-schedules-api)
 *
 * scope: `pay_schedules:write`
 */
export declare function paySchedulesGetPreview(client: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesGetPreview.d.ts.map