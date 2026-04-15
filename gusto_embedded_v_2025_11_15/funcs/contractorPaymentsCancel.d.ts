import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Cancel a contractor payment
 *
 * @remarks
 * Cancels and deletes a contractor payment. If the contractor payment has already started processing ("may_cancel": true), the payment cannot be cancelled.
 *
 * scope: `payrolls:run`
 */
export declare function contractorPaymentsCancel(client: GustoEmbeddedCore, request: operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: RequestOptions): Promise<Result<void, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentsCancel.d.ts.map