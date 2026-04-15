import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRequest, PutV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/putv1companiescompanyuuidholidaypaypolicy.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a company's holiday pay policy
 *
 * @remarks
 * Update a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function holidayPayPoliciesUpdate(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyUuidHolidayPayPolicyResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=holidayPayPoliciesUpdate.d.ts.map