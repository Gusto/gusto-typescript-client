import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function bankAccountsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdBankAccountsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankAccountsGet.d.ts.map