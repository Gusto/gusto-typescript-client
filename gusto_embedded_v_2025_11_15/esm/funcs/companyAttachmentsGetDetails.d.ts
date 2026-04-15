import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesAttachmentRequest, GetV1CompaniesAttachmentResponse } from "../models/operations/getv1companiesattachment.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get Company Attachment Details
 *
 * @remarks
 * Retrieve the detail of an attachment uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function companyAttachmentsGetDetails(client: GustoEmbeddedCore, request: GetV1CompaniesAttachmentRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesAttachmentResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyAttachmentsGetDetails.d.ts.map