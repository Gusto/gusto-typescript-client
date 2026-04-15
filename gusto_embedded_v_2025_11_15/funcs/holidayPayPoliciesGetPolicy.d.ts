import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get a company's holiday pay policy
 *
 * @remarks
 * Get a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:read`
 */
export declare function holidayPayPoliciesGetPolicy(client: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): Promise<Result<components.HolidayPayPolicy, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=holidayPayPoliciesGetPolicy.d.ts.map