import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompanyFormsRequest, GetV1CompanyFormsResponse } from "../models/operations/getv1companyforms.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function companyFormsGetAll(client: GustoEmbeddedCore, request: GetV1CompanyFormsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompanyFormsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyFormsGetAll.d.ts.map