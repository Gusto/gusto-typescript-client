import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export declare function contractorDocumentsList(client: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentsRequest, options?: RequestOptions): Promise<Result<Array<components.Document>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorDocumentsList.d.ts.map