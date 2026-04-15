import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceRequest, PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceResponse } from "../models/operations/putv1timeoffpoliciestimeoffpolicyuuidbalance.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update employee time off balances
 *
 * @remarks
 * Updates time off hours balances for employees for a time off policy.
 *
 * scope: `time_off_policies:write`
 */
export declare function timeOffPoliciesUpdateBalance(client: GustoEmbeddedCore, request: PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceRequest, options?: RequestOptions): APIPromise<Result<PutV1TimeOffPoliciesTimeOffPolicyUuidBalanceResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=timeOffPoliciesUpdateBalance.d.ts.map