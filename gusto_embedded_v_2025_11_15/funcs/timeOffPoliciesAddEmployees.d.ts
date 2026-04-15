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
 * Add employees to a time off policy
 *
 * @remarks
 * Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
 *
 * scope: `time_off_policies:write`
 */
export declare function timeOffPoliciesAddEmployees(client: GustoEmbeddedCore, request: operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest, options?: RequestOptions): APIPromise<Result<operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesAddEmployees.d.ts.map