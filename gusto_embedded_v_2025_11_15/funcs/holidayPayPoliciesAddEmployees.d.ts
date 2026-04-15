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
 * Add employees to a company's holiday pay policy
 *
 * @remarks
 * Add employees to a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function holidayPayPoliciesAddEmployees(client: GustoEmbeddedCore, request: operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest, options?: RequestOptions): APIPromise<Result<operations.PutCompaniesCompanyUuidHolidayPayPolicyAddResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=holidayPayPoliciesAddEmployees.d.ts.map