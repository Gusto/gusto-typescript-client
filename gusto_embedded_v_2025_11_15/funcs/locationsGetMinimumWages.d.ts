import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get minimum wages for a location
 *
 * @remarks
 * Get minimum wages for a location
 *
 * scope: `companies:read`
 */
export declare function locationsGetMinimumWages(client: GustoEmbeddedCore, request: operations.GetV1LocationsLocationUuidMinimumWagesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1LocationsLocationUuidMinimumWagesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=locationsGetMinimumWages.d.ts.map