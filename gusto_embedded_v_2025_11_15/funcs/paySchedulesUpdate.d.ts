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
 * Update a pay schedule
 *
 * @remarks
 * Updates a pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export declare function paySchedulesUpdate(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesUpdate.d.ts.map