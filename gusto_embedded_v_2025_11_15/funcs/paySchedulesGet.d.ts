import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export declare function paySchedulesGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesGet.d.ts.map