import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function companyAttachmentsGetAll(client: GustoEmbeddedCore, request: operations.GetV1CompaniesAttachmentsRequest, options?: RequestOptions): Promise<Result<Array<components.CompanyAttachment>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyAttachmentsGetAll.d.ts.map