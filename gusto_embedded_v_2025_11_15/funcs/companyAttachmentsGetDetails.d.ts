import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function companyAttachmentsGetDetails(client: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesAttachmentResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyAttachmentsGetDetails.d.ts.map