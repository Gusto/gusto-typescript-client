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
 * Verify a company bank account
 *
 * @remarks
 * Verify a company bank account by confirming the two micro-deposits sent to the bank account. Note that the order of the two deposits specified in request parameters does not matter. There's a maximum of 5 verification attempts, after which we will automatically initiate a new set of micro-deposits and require the bank account to be verified with the new micro-deposits.
 *
 * ### Bank account verification in demo
 *
 * We provide the endpoint `POST '/v1/companies/{company_id}/bank_accounts/{bank_account_uuid}/send_test_deposits'` to facilitate bank account verification in the demo environment. This endpoint simulates the micro-deposits transfer and returns them in the response. You can call this endpoint as many times as you wish to retrieve the values of the two micro deposits.
 *
 * ```
 *   POST '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/bank_accounts/ade55e57-4800-4059-9ecd-fa29cfeb6dd2/send_test_deposits'
 *
 *   {
 *     "deposit_1": 0.02,
 *     "deposit_2": 0.42
 *   }
 * ```
 *
 * scope: `company_bank_accounts:write`
 */
export declare function bankAccountsVerify(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdBankAccountsVerifyRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdBankAccountsVerifyResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankAccountsVerify.d.ts.map