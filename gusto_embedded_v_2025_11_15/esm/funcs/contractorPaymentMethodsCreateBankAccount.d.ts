import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1ContractorsContractorUuidBankAccountsRequest, PostV1ContractorsContractorUuidBankAccountsResponse } from "../models/operations/postv1contractorscontractoruuidbankaccounts.js";
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
export declare function contractorPaymentMethodsCreateBankAccount(client: GustoEmbeddedCore, request: PostV1ContractorsContractorUuidBankAccountsRequest, options?: RequestOptions): APIPromise<Result<PostV1ContractorsContractorUuidBankAccountsResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorPaymentMethodsCreateBankAccount.d.ts.map