import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompanyExternalPayrollsRequest, GetV1CompanyExternalPayrollsResponse } from "../models/operations/getv1companyexternalpayrolls.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function externalPayrollsGet(client: GustoEmbeddedCore, request: GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompanyExternalPayrollsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsGet.d.ts.map