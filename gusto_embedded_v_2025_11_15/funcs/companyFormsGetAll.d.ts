import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function companyFormsGetAll(client: GustoEmbeddedCore, request: operations.GetV1CompanyFormsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyFormsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyFormsGetAll.d.ts.map