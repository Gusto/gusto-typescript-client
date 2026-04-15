import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get a time off policy
 *
 * @remarks
 * Get a time off policy
 *
 * scope: `time_off_policies:read`
 */
export declare function timeOffPoliciesRetrieve(client: GustoEmbeddedCore, request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest, options?: RequestOptions): Promise<Result<components.TimeOffPolicy, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesRetrieve.d.ts.map