import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a contractor
 *
 * @remarks
 * Get a contractor.
 *
 * scope: `contractors:read`
 */
export declare function contractorsGet(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorsContractorUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsGet.d.ts.map