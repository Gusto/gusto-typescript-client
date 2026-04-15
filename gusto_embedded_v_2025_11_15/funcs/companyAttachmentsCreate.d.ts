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
 * Create Company Attachment and Upload File
 *
 * @remarks
 * Upload a file and create a company attachment. We recommend uploading
 * PDF files for optimal compatibility. However, the following file types are
 * allowed: .qbb, .qbm, .gif, .jpg, .png, .pdf, .xls, .xlsx, .doc and .docx.
 *
 * scope: `company_attachments:write`
 */
export declare function companyAttachmentsCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesAttachmentRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesAttachmentResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyAttachmentsCreate.d.ts.map