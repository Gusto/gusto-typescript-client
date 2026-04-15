import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a contractor's payment method
 *
 * @remarks
 * Fetches a contractor's payment method. A contractor payment method
 * describes how the payment should be split across the contractor's associated
 * bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function contractorPaymentMethodGet(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorsContractorUuidPaymentMethodResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentMethodGet.d.ts.map