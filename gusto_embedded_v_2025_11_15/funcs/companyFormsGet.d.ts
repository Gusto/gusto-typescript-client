import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a company form
 *
 * @remarks
 * Get a company form
 *
 * scope: `company_forms:read`
 */
export declare function companyFormsGet(client: GustoEmbeddedCore, request: operations.GetV1CompanyFormRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyFormResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyFormsGet.d.ts.map