import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function contractorFormsGetAll(client: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest, options?: RequestOptions): Promise<Result<Array<components.Form1099>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorFormsGetAll.d.ts.map