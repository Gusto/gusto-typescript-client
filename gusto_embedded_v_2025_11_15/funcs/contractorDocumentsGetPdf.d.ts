import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the contractor document pdf
 *
 * @remarks
 * Get the contractor document pdf.
 *
 * scope: `contractor_documents:read`
 */
export declare function contractorDocumentsGetPdf(client: GustoEmbeddedCore, request: operations.GetV1ContractorDocumentPdfRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorDocumentPdfResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorDocumentsGetPdf.d.ts.map