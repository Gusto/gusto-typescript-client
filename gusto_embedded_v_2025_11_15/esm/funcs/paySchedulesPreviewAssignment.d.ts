import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse } from "../models/operations/postv1companiescompanyidpayschedulesassignmentpreview.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Preview pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export declare function paySchedulesPreviewAssignment(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesPreviewAssignment.d.ts.map