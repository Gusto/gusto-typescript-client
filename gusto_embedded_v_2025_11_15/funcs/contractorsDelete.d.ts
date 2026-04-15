import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a contractor
 *
 * @remarks
 * A contractor can only be deleted when there are no contractor payments.
 *
 * scope: `contractors:manage`
 */
export declare function contractorsDelete(client: GustoEmbeddedCore, request: operations.DeleteV1ContractorsContractorUuidRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1ContractorsContractorUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsDelete.d.ts.map