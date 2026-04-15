import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function contractorFormsList(client: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorFormsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorFormsList.d.ts.map