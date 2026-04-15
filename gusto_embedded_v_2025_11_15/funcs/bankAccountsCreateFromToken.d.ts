import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Create a bank account from a plaid processor token
 *
 * @remarks
 * This endpoint creates a new **verified** bank account by using a plaid processor token to retrieve its information.
 *
 * scope: `plaid_processor:write`
 *
 * > 📘
 * > To create a token please use the [plaid api](https://plaid.com/docs/api/processors/#processortokencreate) and select "gusto" as processor.
 *
 * > 🚧 Warning - Company Bank Accounts
 * >
 * > If a default company bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
 */
export declare function bankAccountsCreateFromToken(client: GustoEmbeddedCore, request: operations.PostV1PlaidProcessorTokenRequest, options?: RequestOptions): Promise<Result<operations.PostV1PlaidProcessorTokenResponseBody, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankAccountsCreateFromToken.d.ts.map