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
 * Remove employees from a time off policy
 *
 * @remarks
 * Remove employees from a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function timeOffPoliciesRemoveEmployees(client: GustoEmbeddedCore, request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesRemoveEmployees.d.ts.map