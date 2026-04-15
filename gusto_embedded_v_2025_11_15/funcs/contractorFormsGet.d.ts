import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a contractor form
 *
 * @remarks
 * Get a contractor form
 *
 * scope: `contractor_forms:read`
 */
export declare function contractorFormsGet(client: GustoEmbeddedCore, request: operations.GetV1ContractorFormRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorFormResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorFormsGet.d.ts.map