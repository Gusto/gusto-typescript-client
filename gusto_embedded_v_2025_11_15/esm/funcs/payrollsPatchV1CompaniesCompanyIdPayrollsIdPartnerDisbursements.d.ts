import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsRequest, PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsResponse } from "../models/operations/patchv1companiescompanyidpayrollsidpartnerdisbursements.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update partner disbursements for a payroll
 *
 * @remarks
 * Update partner disbursements for a specific payroll.
 *
 * scope: `partner_disbursements:write`
 */
export declare function payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements(client: GustoEmbeddedCore, request: PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsRequest, options?: RequestOptions): APIPromise<Result<PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements.d.ts.map