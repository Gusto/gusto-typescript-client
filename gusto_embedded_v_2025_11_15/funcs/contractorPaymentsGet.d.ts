import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export declare function contractorPaymentsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentsGet.d.ts.map