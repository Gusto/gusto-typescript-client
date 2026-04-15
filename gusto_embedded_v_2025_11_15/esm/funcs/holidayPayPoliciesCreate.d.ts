import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyUuidHolidayPayPolicyRequest, PostV1CompaniesCompanyUuidHolidayPayPolicyResponse } from "../models/operations/postv1companiescompanyuuidholidaypaypolicy.js";
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
export declare function holidayPayPoliciesCreate(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyUuidHolidayPayPolicyResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=holidayPayPoliciesCreate.d.ts.map