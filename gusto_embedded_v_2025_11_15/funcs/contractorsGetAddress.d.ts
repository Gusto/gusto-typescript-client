import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a contractor address
 *
 * @remarks
 * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * scope: `contractors:read`
 */
export declare function contractorsGetAddress(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidAddressRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorsContractorUuidAddressResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsGetAddress.d.ts.map