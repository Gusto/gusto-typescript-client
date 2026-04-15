import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get child support garnishment data
 *
 * @remarks
 * Agency data and requirements to be used for creating child support garnishments
 *
 * scope: `garnishments:read`
 */
export declare function garnishmentsGetChildSupport(client: GustoEmbeddedCore, request: operations.GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): Promise<Result<components.ChildSupportData, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=garnishmentsGetChildSupport.d.ts.map