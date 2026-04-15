import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1ContractorFormPdfRequest, GetV1ContractorFormPdfResponse } from "../models/operations/getv1contractorformpdf.js";
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
export declare function contractorFormsGetPdf(client: GustoEmbeddedCore, request: GetV1ContractorFormPdfRequest, options?: RequestOptions): APIPromise<Result<GetV1ContractorFormPdfResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorFormsGetPdf.d.ts.map