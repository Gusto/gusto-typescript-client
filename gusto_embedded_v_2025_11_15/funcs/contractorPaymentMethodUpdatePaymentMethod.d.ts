import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Update a contractor's payment method
 *
 * @remarks
 * Updates a contractor's payment method. Note that creating a contractor
 * bank account will also update the contractor's payment method.
 *
 * scope: `contractor_payment_methods:write`
 */
export declare function contractorPaymentMethodUpdatePaymentMethod(client: GustoEmbeddedCore, request: operations.PutV1ContractorsContractorIdPaymentMethodRequest, options?: RequestOptions): Promise<Result<components.ContractorPaymentMethod, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentMethodUpdatePaymentMethod.d.ts.map