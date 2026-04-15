import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse } from "../models/operations/postv1companiescompanyidcontractorpaymentgroupspreview.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Preview a contractor payment group
 *
 * @remarks
 * Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.
 * The returned creation_token is a required parameter in order to create the contractor payment group.
 *
 * scope: `payrolls:read`
 */
export declare function contractorPaymentGroupsPreview(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorPaymentGroupsPreview.d.ts.map