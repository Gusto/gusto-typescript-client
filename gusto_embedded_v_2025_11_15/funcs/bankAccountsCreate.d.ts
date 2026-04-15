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
 * Create a company bank account
 *
 * @remarks
 * This endpoint creates a new company bank account.
 *
 * Upon being created, two verification deposits are automatically sent to the bank account, and the bank account's verification_status is 'awaiting_deposits'.
 *
 * When the deposits are successfully transferred, the verification_status changes to 'ready_for_verification', at which point the verify endpoint can be used to verify the bank account.
 * After successful verification, the bank account's verification_status is 'verified'.
 *
 * scope: `company_bank_accounts:write`
 *
 * > 🚧 Warning
 * >
 * > If a default bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
 */
export declare function bankAccountsCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdBankAccountsRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdBankAccountsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankAccountsCreate.d.ts.map