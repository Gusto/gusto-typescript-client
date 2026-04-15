import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1ContractorsContractorIdPaymentMethodRequest, PutV1ContractorsContractorIdPaymentMethodResponse } from "../models/operations/putv1contractorscontractoridpaymentmethod.js";
import { APIPromise } from "../types/async.js";
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
export declare function contractorPaymentMethodUpdate(client: GustoEmbeddedCore, request: PutV1ContractorsContractorIdPaymentMethodRequest, options?: RequestOptions): APIPromise<Result<PutV1ContractorsContractorIdPaymentMethodResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorPaymentMethodUpdate.d.ts.map