import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function garnishmentsGetChildSupportData(client: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1GarnishmentsChildSupportResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=garnishmentsGetChildSupportData.d.ts.map