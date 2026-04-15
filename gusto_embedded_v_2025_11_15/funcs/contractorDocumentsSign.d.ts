import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Sign a contractor document
 *
 * @remarks
 * Sign a contractor document.
 *
 * scope: `contractor_documents:write`
 */
export declare function contractorDocumentsSign(client: GustoEmbeddedCore, request: operations.PutV1ContractorDocumentSignRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1ContractorDocumentSignResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorDocumentsSign.d.ts.map