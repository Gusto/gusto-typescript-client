import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a temporary url to download the Company Attachment file
 *
 * @remarks
 * Retrieve a temporary url to download a attachment file uploaded
 * by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function companyAttachmentGetDownloadUrl(client: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesAttachmentUrlResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyAttachmentGetDownloadUrl.d.ts.map