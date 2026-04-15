import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompanyFormSignRequest, PutV1CompanyFormSignResponse } from "../models/operations/putv1companyformsign.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Sign a company form
 *
 * @remarks
 * Sign a company form. Company forms must be signed by the company signatory.
 *
 * scope: `company_forms:sign`
 */
export declare function companyFormsSign(client: GustoEmbeddedCore, request: PutV1CompanyFormSignRequest, options?: RequestOptions): APIPromise<Result<PutV1CompanyFormSignResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyFormsSign.d.ts.map