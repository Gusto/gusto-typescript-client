import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse } from "../models/operations/getv1companiescompanyidpayschedulesassignments.js";
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
export declare function paySchedulesGetAssignments(client: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=paySchedulesGetAssignments.d.ts.map