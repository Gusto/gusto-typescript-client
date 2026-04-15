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
 * Create a new pay schedule
 *
 * @remarks
 * If a company does not have any pay schedules, this endpoint will create a single pay schedule and assign it to all employees. This is a common use case during company onboarding.
 *
 * If a company has an existing active pay schedule and want to support multiple pay schedules, this endpoint will create a pay schedule that is not assigned to any employee.
 *
 * Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.
 *
 * scope: `pay_schedules:write`
 */
export declare function paySchedulesCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdPaySchedulesRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdPaySchedulesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesCreate.d.ts.map