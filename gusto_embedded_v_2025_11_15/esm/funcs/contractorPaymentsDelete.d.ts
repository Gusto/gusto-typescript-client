import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse } from "../models/operations/deletev1companiescompanyidcontractorpaymentcontractorpayment.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Cancel a contractor payment
 *
 * @remarks
 * Cancels and deletes a contractor payment. If the contractor payment has already started processing ("may_cancel": true), the payment cannot be cancelled.
 *
 * scope: `payrolls:run`
 */
export declare function contractorPaymentsDelete(client: GustoEmbeddedCore, request: DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: RequestOptions): APIPromise<Result<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorPaymentsDelete.d.ts.map