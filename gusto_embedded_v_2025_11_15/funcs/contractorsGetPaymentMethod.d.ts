import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function contractorsGetPaymentMethod(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): Promise<Result<components.ContractorPaymentMethod, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsGetPaymentMethod.d.ts.map