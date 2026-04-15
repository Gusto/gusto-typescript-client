import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a contractor document
 *
 * @remarks
 * Get a contractor document.
 *
 * scope: `contractor_documents:read`
 */
export declare function contractorDocumentsGet(client: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorDocumentResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorDocumentsGet.d.ts.map