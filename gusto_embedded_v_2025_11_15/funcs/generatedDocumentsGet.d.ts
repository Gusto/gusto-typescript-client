import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a generated document
 *
 * @remarks
 * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
 *
 * scope: `generated_documents:read`
 */
export declare function generatedDocumentsGet(client: GustoEmbeddedCore, request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=generatedDocumentsGet.d.ts.map