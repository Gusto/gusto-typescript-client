import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
 *
 * scope: `pay_schedules:read`
 */
export declare function paySchedulesGetAssignments(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesGetAssignments.d.ts.map