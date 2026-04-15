import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function achTransactionsGetAll(client: GustoEmbeddedCore, request: operations.GetAchTransactionsRequest, options?: RequestOptions): APIPromise<Result<operations.GetAchTransactionsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=achTransactionsGetAll.d.ts.map