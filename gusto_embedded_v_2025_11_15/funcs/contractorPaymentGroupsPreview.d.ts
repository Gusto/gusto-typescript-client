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
 * Preview a contractor payment group
 *
 * @remarks
 * Preview a group of contractor payments. Request will validate inputs and return preview of the contractor payment group including the expected debit_date.  Uuid will be null in the response.
 *
 * scope: `payrolls:read`
 */
export declare function contractorPaymentGroupsPreview(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentGroupsPreview.d.ts.map