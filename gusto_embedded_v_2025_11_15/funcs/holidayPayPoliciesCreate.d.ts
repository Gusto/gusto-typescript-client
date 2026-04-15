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
 * Create a holiday pay policy for a company
 *
 * @remarks
 * Create a holiday pay policy for a company
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function holidayPayPoliciesCreate(client: GustoEmbeddedCore, request: operations.PostCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): APIPromise<Result<operations.PostCompaniesCompanyUuidHolidayPayPolicyResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=holidayPayPoliciesCreate.d.ts.map