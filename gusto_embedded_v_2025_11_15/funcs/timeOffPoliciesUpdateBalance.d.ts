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
 * Update employee time off hour balances
 *
 * @remarks
 * Updates time off hours balances for employees for a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function timeOffPoliciesUpdateBalance(client: GustoEmbeddedCore, request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest, options?: RequestOptions): APIPromise<Result<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesUpdateBalance.d.ts.map