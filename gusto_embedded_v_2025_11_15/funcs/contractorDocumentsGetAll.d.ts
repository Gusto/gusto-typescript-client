import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function contractorDocumentsGetAll(client: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorDocumentsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorDocumentsGetAll.d.ts.map