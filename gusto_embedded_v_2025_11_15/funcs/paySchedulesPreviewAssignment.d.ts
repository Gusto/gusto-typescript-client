import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function paySchedulesPreviewAssignment(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesPreviewAssignment.d.ts.map