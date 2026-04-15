import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a company form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `company_forms:read`
 */
export declare function companyFormsGetPdf(client: GustoEmbeddedCore, request: operations.GetV1CompanyFormPdfRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyFormPdfResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyFormsGetPdf.d.ts.map