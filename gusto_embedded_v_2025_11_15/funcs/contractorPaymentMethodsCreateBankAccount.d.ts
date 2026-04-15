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
 * Create a contractor bank account
 *
 * @remarks
 * Creates a contractor bank account.
 *
 * Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who already has a bank account will just replace it.
 *
 * scope: `contractor_payment_methods:write`
 */
export declare function contractorPaymentMethodsCreateBankAccount(client: GustoEmbeddedCore, request: operations.PostV1ContractorsContractorUuidBankAccountsRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1ContractorsContractorUuidBankAccountsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentMethodsCreateBankAccount.d.ts.map