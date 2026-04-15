import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequest, PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveResponse } from "../models/operations/putv1companiescompanyuuidholidaypaypolicyremove.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Remove employees from a company's holiday pay policy
 *
 * @remarks
 * Remove employees from a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export declare function holidayPayPoliciesRemoveEmployees(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyUuidHolidayPayPolicyRemoveResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=holidayPayPoliciesRemoveEmployees.d.ts.map