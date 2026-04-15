import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the contractor form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `contractor_forms:read`
 */
export declare function contractorFormsGetPdf(client: GustoEmbeddedCore, request: operations.GetV1ContractorFormPdfRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorFormPdfResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorFormsGetPdf.d.ts.map