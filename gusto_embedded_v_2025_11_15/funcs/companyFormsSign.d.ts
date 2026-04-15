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
 * Sign a company form
 *
 * @remarks
 * Sign a company form. Company forms must be signed by the company signatory.
 *
 * scope: `company_forms:sign`
 */
export declare function companyFormsSign(client: GustoEmbeddedCore, request: operations.PutV1CompanyFormSignRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompanyFormSignResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyFormsSign.d.ts.map