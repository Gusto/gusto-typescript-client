import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a single contractor payment receipt
 *
 * @remarks
 * Returns a contractor payment receipt.
 *
 * Notes:
 * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
 * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function contractorPaymentsGetReceipt(client: GustoEmbeddedCore, request: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentsGetReceipt.d.ts.map