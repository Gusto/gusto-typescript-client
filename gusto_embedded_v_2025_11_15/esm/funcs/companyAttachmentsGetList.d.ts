import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesAttachmentsRequest, GetV1CompaniesAttachmentsResponse } from "../models/operations/getv1companiesattachments.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get List of Company Attachments
 *
 * @remarks
 * Retrieve a list of all the attachments uploaded by the company.
 *
 * scope: `company_attachments:read`
 */
export declare function companyAttachmentsGetList(client: GustoEmbeddedCore, request: GetV1CompaniesAttachmentsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesAttachmentsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=companyAttachmentsGetList.d.ts.map