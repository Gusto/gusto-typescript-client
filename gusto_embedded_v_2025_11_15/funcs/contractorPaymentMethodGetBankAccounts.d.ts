import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all contractor bank accounts
 *
 * @remarks
 * Returns all contractor bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function contractorPaymentMethodGetBankAccounts(client: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidBankAccountsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1ContractorsContractorUuidBankAccountsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentMethodGetBankAccounts.d.ts.map